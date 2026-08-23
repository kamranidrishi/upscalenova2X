import React, { useState } from 'react';
import { DemoItem } from '../../data/demos';
import {
  Zap,
  MessageSquare,
  Sparkles,
  Code2,
  FileText,
  Shield,
  Send,
  Copy,
  Check,
  RotateCcw,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  Mail,
  ChevronRight,
  ExternalLink,
  Bot,
  Terminal,
  Cpu,
  Layers,
  Sparkle
} from 'lucide-react';

interface CognitaBaseDemoProps {
  demo: DemoItem;
  isMobile: boolean;
  isTablet: boolean;
}

export const CognitaBaseDemo: React.FC<CognitaBaseDemoProps> = ({ isMobile, isTablet }) => {
  const [activeTab, setActiveTab] = useState<'home' | 'playground' | 'features' | 'pricing' | 'about' | 'contact'>('home');
  const [selectedModel, setSelectedModel] = useState('Cognita Standard v1.2');
  const [inputPrompt, setInputPrompt] = useState('');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [isTyping, setIsTyping] = useState(false);

  // Chat message history
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; text: string; time: string }>>([
    {
      role: 'assistant',
      text: 'Hello! I am Cognita Standard v1.2. I can assist you with natural language writing, code generation, summarization, and data queries. How can I help you today?',
      time: '10:00 AM'
    }
  ]);

  // Contact Form state
  const [contactForm, setContactForm] = useState({ name: '', email: '', queryType: 'General Inquiry', message: '' });
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const promptSuggestions = [
    'Explain quantum computing in simple terms for a beginner.',
    'Write a clean JavaScript function to debounce search inputs.',
    'Draft a 3-bullet executive summary on AI workflow automation.',
    'Summarize key benefits of microservices architecture.'
  ];

  const handleSendMessage = (textToSend?: string) => {
    const prompt = (textToSend || inputPrompt).trim();
    if (!prompt || isTyping) return;

    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const newMsgList = [...messages, { role: 'user' as const, text: prompt, time: currentTime }];
    setMessages(newMsgList);
    setInputPrompt('');
    setIsTyping(true);

    setTimeout(() => {
      let reply = '';
      if (prompt.toLowerCase().includes('quantum')) {
        reply = `**Quantum Computing Explained:**\nUnlike classical computers that use bits (0 or 1), quantum computers use **qubits** which can exist in a superposition of both 0 and 1 simultaneously. This allows quantum processors to solve complex optimization, cryptography, and molecular simulations exponentially faster!`;
      } else if (prompt.toLowerCase().includes('javascript') || prompt.toLowerCase().includes('function') || prompt.toLowerCase().includes('code')) {
        reply = `Here is a high-performance debounce utility function in JavaScript:\n\n\`\`\`javascript\nfunction debounce(fn, delay = 300) {\n  let timer;\n  return function(...args) {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn.apply(this, args), delay);\n  };\n}\n\`\`\`\n*Ensures rapid events like keystrokes only trigger your handler after user pauses.*`;
      } else if (prompt.toLowerCase().includes('summary') || prompt.toLowerCase().includes('executive')) {
        reply = `**Executive Summary: AI Workflow Automation**\n- **Efficiency Surge:** Eliminates 68% of manual data entry & routine writing tasks.\n- **Faster Time-to-Market:** Speeds up code delivery and customer response cycles by 3.5x.\n- **Error Reduction:** Provides 99.4% standard compliance and consistent data synthesis.`;
      } else {
        reply = `Based on your request, Cognita AI has analyzed the input: "${prompt}".\n\nKey Insights:\n1. Structured output generated with high precision.\n2. Model response aligned with verified factual parameters.\n3. Ready for immediate export or downstream integration.`;
      }

      setMessages((prev) => [
        ...prev,
        { role: 'assistant', text: reply, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
      ]);
      setIsTyping(false);
    }, 600);
  };

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard?.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleClearChat = () => {
    setMessages([
      {
        role: 'assistant',
        text: 'Chat cleared. How can Cognita AI assist you today?',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email) return;
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      setContactForm({ name: '', email: '', queryType: 'General Inquiry', message: '' });
    }, 4000);
  };

  return (
    <div className="w-full h-full bg-slate-50 text-slate-800 font-sans flex flex-col overflow-y-auto custom-scrollbar select-text">
      {/* Top SaaS Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm shrink-0 px-4 lg:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-md shadow-indigo-200">
            <Zap className="w-5 h-5 fill-current" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg text-slate-900 tracking-tight">Cognita AI</span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-200">
                Base ₹24,999
              </span>
            </div>
            <p className="text-[11px] text-slate-500 hidden sm:block">Essential AI SaaS Platform</p>
          </div>
        </div>

        {/* Navigation tabs */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 p-1 rounded-xl border border-slate-200/80 text-xs font-semibold text-slate-600">
          <button
            onClick={() => setActiveTab('home')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'home' ? 'bg-white text-indigo-600 shadow-sm font-bold' : 'hover:text-slate-900'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setActiveTab('features')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'features' ? 'bg-white text-indigo-600 shadow-sm font-bold' : 'hover:text-slate-900'
            }`}
          >
            Features
          </button>
          <button
            onClick={() => setActiveTab('playground')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'playground' ? 'bg-white text-indigo-600 shadow-sm font-bold' : 'hover:text-slate-900'
            }`}
          >
            <Sparkle className="w-3.5 h-3.5 text-indigo-500" />
            AI Playground
          </button>
          <button
            onClick={() => setActiveTab('pricing')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'pricing' ? 'bg-white text-indigo-600 shadow-sm font-bold' : 'hover:text-slate-900'
            }`}
          >
            Pricing
          </button>
          <button
            onClick={() => setActiveTab('about')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'about' ? 'bg-white text-indigo-600 shadow-sm font-bold' : 'hover:text-slate-900'
            }`}
          >
            About
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'contact' ? 'bg-white text-indigo-600 shadow-sm font-bold' : 'hover:text-slate-900'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Mobile Quick Bar */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('playground')}
            className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-bold shadow-sm shadow-indigo-200 flex items-center gap-1.5 transition-all"
          >
            <Bot className="w-3.5 h-3.5" />
            <span>Launch AI</span>
          </button>
        </div>
      </header>

      {/* Mobile nav pills */}
      <div className="md:hidden flex items-center gap-1.5 overflow-x-auto px-4 py-2 bg-slate-100 border-b border-slate-200 text-xs shrink-0 custom-scrollbar">
        {(['home', 'features', 'playground', 'pricing', 'about', 'contact'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-1 rounded-full whitespace-nowrap font-medium capitalize ${
              activeTab === tab ? 'bg-indigo-600 text-white font-bold' : 'bg-white text-slate-600 border border-slate-200'
            }`}
          >
            {tab === 'playground' ? 'AI Playground' : tab}
          </button>
        ))}
      </div>

      {/* Main Body Switcher */}
      <main className="flex-1">
        {/* 1. HOME VIEW */}
        {activeTab === 'home' && (
          <div className="space-y-12 py-8 px-4 lg:px-12 max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center space-y-5 max-w-3xl mx-auto pt-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                Next-Gen Generative Intelligence for Workflows
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Simpler, Smarter AI for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Your Modern SaaS</span>
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
                Cognita AI gives your team instant generative intelligence for writing, code synthesis, document summaries, and customer workflows in one fast interface.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => setActiveTab('playground')}
                  className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-bold shadow-md shadow-indigo-200 flex items-center gap-2 transition-all"
                >
                  <Bot className="w-4 h-4" />
                  Try Live AI Playground
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveTab('features')}
                  className="px-6 py-3 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded-xl text-sm font-semibold transition-all"
                >
                  Explore Features
                </button>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 max-w-2xl mx-auto text-left">
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                  <div className="text-xl font-extrabold text-indigo-600">99.4%</div>
                  <div className="text-xs text-slate-500 font-medium">Factual Accuracy</div>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                  <div className="text-xl font-extrabold text-violet-600">0.3s</div>
                  <div className="text-xs text-slate-500 font-medium">Avg Response Latency</div>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                  <div className="text-xl font-extrabold text-slate-800">10,000+</div>
                  <div className="text-xs text-slate-500 font-medium">Monthly Prompts</div>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                  <div className="text-xl font-extrabold text-emerald-600">100%</div>
                  <div className="text-xs text-slate-500 font-medium">Uptime Guarantee</div>
                </div>
              </div>
            </div>

            {/* Quick Interactive Teaser Box */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-slate-800">Interactive Prompt Preview</span>
                </div>
                <span className="text-[11px] text-slate-500">Model: Cognita Standard v1.2</span>
              </div>

              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80 space-y-3">
                <p className="text-xs text-slate-500 font-medium">Try clicking any sample prompt below to launch into the AI Playground:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {promptSuggestions.map((p, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setActiveTab('playground');
                        handleSendMessage(p);
                      }}
                      className="text-left text-xs bg-white hover:bg-indigo-50/60 p-3 rounded-lg border border-slate-200 hover:border-indigo-300 text-slate-700 flex items-start justify-between gap-2 group transition-all"
                    >
                      <span className="line-clamp-2">{p}</span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 shrink-0 mt-0.5" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Feature Highlights on Home */}
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold text-slate-900">Core Capabilities Included in Base Plan</h2>
                <p className="text-xs text-slate-500">Everything needed to launch a production-ready AI SaaS presence</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">Natural Language Assistant</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Conversational AI with multi-turn memory to answer support questions, write summaries, and draft marketing copies.
                  </p>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">Code & Logic Synthesizer</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Generate clean JavaScript, Python, and SQL snippets with syntax-friendly markdown output and one-click copy.
                  </p>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">Secure SaaS API Ready</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Enterprise-grade endpoint security, prompt validation, and transparent pricing tailored for growing startups.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. PLAYGROUND VIEW */}
        {activeTab === 'playground' && (
          <div className="p-4 lg:p-8 max-w-5xl mx-auto h-full flex flex-col space-y-4">
            {/* Playground Toolbar */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-slate-900">Cognita AI Interactive Playground</h2>
                  <p className="text-[11px] text-slate-500">Test live prompts with instant simulated generative answers</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 text-xs">
                  <span className="text-slate-500 font-medium">Model:</span>
                  <select
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    className="bg-transparent font-bold text-indigo-700 focus:outline-none cursor-pointer"
                  >
                    <option value="Cognita Standard v1.2">Cognita Standard v1.2</option>
                    <option value="Cognita Fast 4B">Cognita Fast 4B (Low Latency)</option>
                    <option value="Cognita Code Mini">Cognita Code Mini</option>
                  </select>
                </div>

                <button
                  onClick={handleClearChat}
                  className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all"
                  title="Clear conversation"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Clear Chat</span>
                </button>
              </div>
            </div>

            {/* Prompt Suggestion Chips */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 custom-scrollbar text-xs">
              <span className="text-slate-400 font-medium whitespace-nowrap text-[11px]">Quick Ideas:</span>
              {promptSuggestions.map((s, i) => (
                <button
                  key={i}
                  onClick={() => handleSendMessage(s)}
                  className="px-3 py-1 rounded-full bg-white hover:bg-indigo-50 border border-slate-200 hover:border-indigo-300 text-slate-700 whitespace-nowrap text-[11px] font-medium transition-all"
                >
                  {s.slice(0, 42)}...
                </button>
              ))}
            </div>

            {/* Chat Box Container */}
            <div className="flex-1 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col overflow-hidden min-h-[420px]">
              {/* Message List */}
              <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 custom-scrollbar bg-slate-50/50">
                {messages.map((m, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div className="flex items-center gap-1.5 mb-1 px-1 text-[10px] text-slate-400 font-medium">
                      {m.role === 'user' ? (
                        <span>You • {m.time}</span>
                      ) : (
                        <span className="flex items-center gap-1 text-indigo-600 font-semibold">
                          <Zap className="w-3 h-3" /> {selectedModel} • {m.time}
                        </span>
                      )}
                    </div>

                    <div
                      className={`relative group max-w-xl p-4 rounded-2xl text-xs leading-relaxed ${
                        m.role === 'user'
                          ? 'bg-indigo-600 text-white rounded-tr-none shadow-sm'
                          : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none shadow-sm'
                      }`}
                    >
                      <div className="whitespace-pre-wrap font-sans">{m.text}</div>

                      {m.role === 'assistant' && (
                        <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400">
                          <span className="flex items-center gap-1 text-emerald-600">
                            <CheckCircle2 className="w-3 h-3" /> Synthesized in 240ms
                          </span>
                          <button
                            onClick={() => handleCopy(m.text, idx)}
                            className="flex items-center gap-1 text-slate-500 hover:text-indigo-600 font-medium px-2 py-0.5 rounded bg-slate-100 hover:bg-indigo-50 transition-colors"
                          >
                            {copiedIndex === idx ? (
                              <>
                                <Check className="w-3 h-3 text-emerald-600" /> Copied!
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" /> Copy Response
                              </>
                            )}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-center gap-2 text-xs text-indigo-600 font-medium bg-indigo-50 p-3 rounded-xl max-w-xs border border-indigo-100">
                    <div className="w-2 h-2 rounded-full bg-indigo-600 animate-ping" />
                    <span>Cognita AI is generating insights...</span>
                  </div>
                )}
              </div>

              {/* Prompt Input Area */}
              <div className="p-3.5 bg-white border-t border-slate-200">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="flex items-center gap-2 bg-slate-50 border border-slate-300 rounded-xl p-1.5 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-transparent transition-all"
                >
                  <input
                    type="text"
                    value={inputPrompt}
                    onChange={(e) => setInputPrompt(e.target.value)}
                    placeholder="Type an AI prompt or question (e.g. 'Write a marketing email for product launch')..."
                    className="flex-1 bg-transparent px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={!inputPrompt.trim() || isTyping}
                    className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all"
                  >
                    <span>Send</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
                <div className="flex items-center justify-between px-2 pt-2 text-[11px] text-slate-400">
                  <span>Press Enter to send • Base token limit: 2,048 tokens/request</span>
                  <span className="text-indigo-600 font-semibold">Active Engine: {selectedModel}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. FEATURES VIEW */}
        {activeTab === 'features' && (
          <div className="py-8 px-4 lg:px-12 max-w-5xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
                Features Overview
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900">What’s Included in Cognita Base Plan</h2>
              <p className="text-sm text-slate-600 max-w-xl mx-auto">
                A streamlined AI toolset tailored to provide responsive generation without bloated infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Conversational AI Engine</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Support contextual chat flows for client onboarding, query handling, and automated response generation.
                </p>
                <ul className="text-xs text-slate-600 space-y-1.5 pt-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500" /> Multi-turn memory retention
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500" /> Customizable system instruction
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500" /> Instant markdown formatting
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center">
                  <Terminal className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Code & Query Builder</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Translate human requests directly into executable JavaScript, Python, HTML, and SQL syntax.
                </p>
                <ul className="text-xs text-slate-600 space-y-1.5 pt-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500" /> 15+ Programming language support
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500" /> 1-Click Code copy widget
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500" /> Syntax verification engine
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Document Summarizer</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Condense lengthy reports, meeting minutes, and legal policies into actionable executive takeaways.
                </p>
                <ul className="text-xs text-slate-600 space-y-1.5 pt-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500" /> Key bullet points generation
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500" /> Sentiment & action items breakdown
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500" /> Export to clean text
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Secure API Integration</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Connect your existing web application to Cognita AI via clean standard REST endpoints.
                </p>
                <ul className="text-xs text-slate-600 space-y-1.5 pt-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500" /> REST JSON endpoints
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500" /> API Key authorization
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500" /> 99.9% uptime SLA
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* 4. PRICING VIEW */}
        {activeTab === 'pricing' && (
          <div className="py-8 px-4 lg:px-12 max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
                Transparent Pricing
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900">Base Website Plan — ₹24,999</h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                Affordable, complete AI SaaS website setup designed to launch your product immediately.
              </p>
            </div>

            <div className="bg-white rounded-3xl border-2 border-indigo-500 shadow-xl overflow-hidden max-w-xl mx-auto">
              <div className="bg-gradient-to-r from-indigo-600 to-violet-600 p-6 text-white text-center space-y-2">
                <div className="text-xs uppercase font-bold tracking-widest text-indigo-200">Most Popular for Early Stage</div>
                <div className="text-4xl font-black">₹24,999 <span className="text-xs font-normal text-indigo-200">one-time investment</span></div>
                <p className="text-xs text-indigo-100">Full modern AI website with interactive playground</p>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">What’s Included:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                    {[
                      'Interactive AI Playground Component',
                      'Multi-Model Switcher UI',
                      'Simulated Generative Typing',
                      '1-Click Copy Code & Response',
                      'Prompt Suggestion Badges',
                      'Features & Pricing Showcase',
                      'Client Enquiry Contact Form',
                      'Responsive Mobile/Tablet/Desktop',
                      'SEO Meta Configuration',
                      'Fast CDN Hosting Deployment'
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-bold text-slate-900">Delivery in 3-5 Business Days</div>
                    <div className="text-[11px] text-slate-500">Includes 1 month free technical support</div>
                  </div>
                  <button
                    onClick={() => setActiveTab('contact')}
                    className="w-full sm:w-auto px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-200 transition-all"
                  >
                    Select ₹24,999 Base Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 5. ABOUT VIEW */}
        {activeTab === 'about' && (
          <div className="py-8 px-4 lg:px-12 max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
                About Cognita AI
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900">Empowering SaaS Innovators</h2>
              <p className="text-sm text-slate-600 max-w-xl mx-auto">
                Cognita AI was founded to bridge the gap between complex machine learning research and intuitive, everyday software applications.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-2xl font-black text-indigo-600">2024</div>
                  <div className="text-xs text-slate-500 font-medium">Platform Inception</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-2xl font-black text-violet-600">45,000+</div>
                  <div className="text-xs text-slate-500 font-medium">Prompts Processed Daily</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-2xl font-black text-emerald-600">120+</div>
                  <div className="text-xs text-slate-500 font-medium">Startups Powered</div>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
                <h3 className="text-sm font-bold text-slate-900">Our Core Philosophy</h3>
                <p>
                  We believe that generative intelligence should not require specialized data science PhDs to deploy. By providing streamlined, pre-configured models and delightful user experiences, teams can prototype and ship AI capabilities in days rather than months.
                </p>
                <p>
                  Our Base tier is tailored specifically for early-stage products, consultants, and developers who need a reliable, high-converting digital storefront with interactive playgrounds.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 6. CONTACT VIEW */}
        {activeTab === 'contact' && (
          <div className="py-8 px-4 lg:px-12 max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
                Get In Touch
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900">Let’s Build Your AI Product</h2>
              <p className="text-sm text-slate-600">
                Have questions about the ₹24,999 Base Plan or custom requirements? Send us a message below.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
              {contactSubmitted ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Thank You!</h3>
                  <p className="text-xs text-slate-600">
                    Your inquiry has been received. Our team will contact you within 2-4 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">Your Name</label>
                      <input
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">Email Address</label>
                      <input
                        type="email"
                        required
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        placeholder="rahul@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Subject / Plan Interest</label>
                    <select
                      value={contactForm.queryType}
                      onChange={(e) => setContactForm({ ...contactForm, queryType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white"
                    >
                      <option>Base Plan (₹24,999) - Ready to Start</option>
                      <option>Playground Customization Inquiry</option>
                      <option>API Integration Questions</option>
                      <option>General Support</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Project Details / Message</label>
                    <textarea
                      rows={4}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      placeholder="Tell us about your SaaS concept, target audience, and expected timelines..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-200 flex items-center justify-center gap-2 transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    Submit Project Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </main>

      {/* SaaS Footer */}
      <footer className="mt-auto border-t border-slate-200 bg-white px-4 lg:px-8 py-4 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>Cognita AI Base Tier • All Systems Operational (99.98%)</span>
        </div>
        <div>
          <span>© 2025 Cognita AI Platform. Powered by Nova Engine.</span>
        </div>
      </footer>
    </div>
  );
};
