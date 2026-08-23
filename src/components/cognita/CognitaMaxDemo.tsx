import React, { useState, useEffect } from 'react';
import { DemoItem } from '../../data/demos';
import {
  Zap,
  Sparkles,
  Activity,
  Cpu,
  Layers,
  Terminal,
  Code2,
  Play,
  Check,
  Copy,
  ChevronRight,
  TrendingUp,
  ShieldAlert,
  ShieldCheck,
  Server,
  DollarSign,
  BarChart3,
  Flame,
  ArrowUpRight,
  Sliders,
  Send,
  Eye,
  Settings,
  RefreshCw,
  Clock,
  Download,
  FileCode,
  Gauge,
  Workflow,
  Network,
  Bot,
  BrainCircuit,
  Boxes,
  CheckCircle2,
  HelpCircle,
  Database,
  ArrowRight
} from 'lucide-react';

interface CognitaMaxDemoProps {
  demo: DemoItem;
  isMobile: boolean;
  isTablet: boolean;
}

export const CognitaMaxDemo: React.FC<CognitaMaxDemoProps> = ({ isMobile, isTablet }) => {
  // Navigation Modes
  const [activeMode, setActiveMode] = useState<
    'overview' | 'arena' | 'agents' | 'telemetry' | 'api' | 'roi'
  >('arena');

  // ==========================================
  // Mode 2: Multi-Model Battle Arena State
  // ==========================================
  const [arenaPrompt, setArenaPrompt] = useState('Build a distributed rate limiter with Redis in Go with token bucket algorithm.');
  const [isBattling, setIsBattling] = useState(false);
  const [battleResults, setBattleResults] = useState<{
    cognita: { text: string; code: string; latency: number; cost: string; tokens: number; rating: number };
    claude: { text: string; code: string; latency: number; cost: string; tokens: number; rating: number };
    gpt4o: { text: string; code: string; latency: number; cost: string; tokens: number; rating: number };
  } | null>(null);

  const runModelBattle = (promptToRun?: string) => {
    const prompt = promptToRun || arenaPrompt;
    setIsBattling(true);

    setTimeout(() => {
      setBattleResults({
        cognita: {
          text: 'Cognita Nexus-9 synthesized optimized Token Bucket rate limiter in Go with atomic Redis pipeline execution.',
          code: `package ratelimit\n\nimport (\n  "context"\n  "github.com/redis/go-redis/v9"\n  "time"\n)\n\nfunc Allow(ctx context.Context, rdb *redis.Client, key string, cap int64, rate time.Duration) (bool, error) {\n  pipe := rdb.Pipeline()\n  // Atomic Redis lua evaluation\n  return true, nil\n}`,
          latency: 86,
          cost: '$0.00042',
          tokens: 312,
          rating: 9.9
        },
        claude: {
          text: 'Claude 3.5 Sonnet generated structured Token Bucket implementation with mutex fallback.',
          code: `type TokenBucket struct {\n  capacity  int64\n  tokens    float64\n  rate      time.Duration\n  redisCli  *redis.Client\n}`,
          latency: 164,
          cost: '$0.00110',
          tokens: 295,
          rating: 9.4
        },
        gpt4o: {
          text: 'GPT-4o Omni generated standard Redis EVAL script for sliding window rate limiting.',
          code: `local key = KEYS[1]\nlocal limit = tonumber(ARGV[1])\nlocal current = tonumber(redis.call('get', key) or "0")\nif current + 1 > limit then return 0 else redis.call("INCRBY", key, 1) return 1 end`,
          latency: 182,
          cost: '$0.00145',
          tokens: 340,
          rating: 9.2
        }
      });
      setIsBattling(false);
    }, 850);
  };

  // Initial load auto-trigger
  useEffect(() => {
    runModelBattle();
  }, []);

  // ==========================================
  // Mode 3: Multi-Agent Workflow State
  // ==========================================
  const [agentStep, setAgentStep] = useState<number>(0);
  const [isRunningPipeline, setIsRunningPipeline] = useState<boolean>(false);
  const [agentLogs, setAgentLogs] = useState<Array<{ agent: string; time: string; msg: string; color: string }>>([
    { agent: 'Orchestrator', time: '12:00:01', msg: 'Pipeline initialized. Waiting for task trigger.', color: 'text-violet-400' }
  ]);

  const runAgentPipeline = () => {
    setIsRunningPipeline(true);
    setAgentStep(1);
    setAgentLogs([
      { agent: '1. Research Agent', time: '12:00:02', msg: 'Crawling multi-tenant DB schema & pulling historical query logs...', color: 'text-cyan-400' }
    ]);

    setTimeout(() => {
      setAgentStep(2);
      setAgentLogs((prev) => [
        ...prev,
        { agent: '2. Reasoning Agent', time: '12:00:03', msg: 'Formulating neural plan: 4 composite indexes + partitioning strategy identified.', color: 'text-violet-400' }
      ]);
    }, 1000);

    setTimeout(() => {
      setAgentStep(3);
      setAgentLogs((prev) => [
        ...prev,
        { agent: '3. Code Synthesis Agent', time: '12:00:04', msg: 'Generating automated migration script in Flyway SQL & Drizzle schema.', color: 'text-amber-400' }
      ]);
    }, 2000);

    setTimeout(() => {
      setAgentStep(4);
      setAgentLogs((prev) => [
        ...prev,
        { agent: '4. QA & Security Agent', time: '12:00:05', msg: 'Zero security flaws detected. Zero breaking changes. Ready for production dispatch.', color: 'text-emerald-400' }
      ]);
      setIsRunningPipeline(false);
    }, 3000);
  };

  // ==========================================
  // Mode 5: Developer API Playground State
  // ==========================================
  const [apiLang, setApiLang] = useState<'curl' | 'python' | 'node' | 'go'>('python');
  const [apiResponse, setApiResponse] = useState<string | null>(null);
  const [isTestingApi, setIsTestingApi] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const testApiEndpoint = () => {
    setIsTestingApi(true);
    setTimeout(() => {
      setApiResponse(
        JSON.stringify(
          {
            id: 'cog_resp_998a41bc',
            object: 'chat.completion',
            created: Math.floor(Date.now() / 1000),
            model: 'cognita-nexus-9',
            choices: [
              {
                index: 0,
                message: {
                  role: 'assistant',
                  content: 'Enterprise neural synthesis verified. 0.00% hallucination rate.'
                },
                finish_reason: 'stop'
              }
            ],
            usage: {
              prompt_tokens: 38,
              completion_tokens: 142,
              total_tokens: 180,
              cost_usd: 0.000216
            },
            latency_ms: 84
          },
          null,
          2
        )
      );
      setIsTestingApi(false);
    }, 500);
  };

  // ==========================================
  // Mode 6: Enterprise ROI Calculator State
  // ==========================================
  const [teamSize, setTeamSize] = useState(35);
  const [monthlyQueries, setMonthlyQueries] = useState(2500000); // 2.5M
  const [customInquirySent, setCustomInquirySent] = useState(false);

  // Derived ROI calculations
  const devHoursSaved = Math.round(teamSize * 18.5);
  const estimatedAnnualSavings = (teamSize * 145000 + (monthlyQueries / 1000000) * 80000).toLocaleString('en-IN');

  return (
    <div className="w-full h-full bg-[#07090e] text-slate-100 font-sans flex flex-col overflow-y-auto custom-scrollbar select-text">
      {/* Top Futuristic Command Header */}
      <header className="sticky top-0 z-40 bg-[#0a0d14]/95 backdrop-blur-xl border-b border-cyan-900/30 shrink-0 px-4 lg:px-8 py-3 flex items-center justify-between shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-fuchsia-500 p-[1px] shadow-lg shadow-cyan-500/20">
              <div className="w-full h-full bg-[#090c15] rounded-[11px] flex items-center justify-center">
                <BrainCircuit className="w-5 h-5 text-cyan-400 animate-pulse" />
              </div>
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#090c15]" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-black text-lg text-white tracking-tight flex items-center gap-1.5">
                Cognita <span className="text-cyan-400 font-mono">OS</span>
              </span>
              <span className="text-[10px] uppercase font-black tracking-widest px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-700/60">
                MAX ₹59,999
              </span>
            </div>
            <p className="text-[10px] text-slate-400 font-mono hidden sm:block">
              Neural Enterprise OS • Cluster 12/12 Online • P99: 84ms
            </p>
          </div>
        </div>

        {/* Modes Bar */}
        <nav className="hidden xl:flex items-center gap-1 bg-[#0f1422] p-1 rounded-xl border border-cyan-900/40 text-xs font-semibold text-slate-300">
          <button
            onClick={() => setActiveMode('arena')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              activeMode === 'arena' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow font-bold' : 'hover:text-white'
            }`}
          >
            <Gauge className="w-3.5 h-3.5 text-cyan-400" />
            Model Battle Arena
          </button>
          <button
            onClick={() => setActiveMode('agents')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              activeMode === 'agents' ? 'bg-violet-500/20 text-violet-300 border border-violet-500/50 shadow font-bold' : 'hover:text-white'
            }`}
          >
            <Workflow className="w-3.5 h-3.5 text-violet-400" />
            Multi-Agent Studio
          </button>
          <button
            onClick={() => setActiveMode('telemetry')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              activeMode === 'telemetry' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 shadow font-bold' : 'hover:text-white'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5 text-emerald-400" />
            Neural Telemetry
          </button>
          <button
            onClick={() => setActiveMode('api')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              activeMode === 'api' ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/50 shadow font-bold' : 'hover:text-white'
            }`}
          >
            <Terminal className="w-3.5 h-3.5 text-indigo-400" />
            SDK & API
          </button>
          <button
            onClick={() => setActiveMode('roi')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              activeMode === 'roi' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50 shadow font-bold' : 'hover:text-white'
            }`}
          >
            <DollarSign className="w-3.5 h-3.5 text-amber-400" />
            ROI & Enterprise
          </button>
          <button
            onClick={() => setActiveMode('overview')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              activeMode === 'overview' ? 'bg-slate-800 text-white shadow font-bold' : 'hover:text-white'
            }`}
          >
            <Boxes className="w-3.5 h-3.5" />
            Overview
          </button>
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveMode('roi')}
            className="px-3.5 py-1.5 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-black rounded-lg text-xs shadow-lg shadow-cyan-500/25 flex items-center gap-1.5 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Deploy Enterprise</span>
          </button>
        </div>
      </header>

      {/* Mobile/Tablet Mode Switcher */}
      <div className="xl:hidden flex items-center gap-1.5 overflow-x-auto px-4 py-2 bg-[#0c101c] border-b border-cyan-900/30 text-xs shrink-0 custom-scrollbar">
        {[
          { id: 'arena', label: 'Battle Arena' },
          { id: 'agents', label: 'Agent Pipeline' },
          { id: 'telemetry', label: 'Telemetry' },
          { id: 'api', label: 'API Playground' },
          { id: 'roi', label: 'ROI Calculator' },
          { id: 'overview', label: 'Overview' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveMode(tab.id as any)}
            className={`px-3 py-1 rounded-full whitespace-nowrap font-medium ${
              activeMode === tab.id
                ? 'bg-cyan-500 text-slate-950 font-black shadow'
                : 'bg-[#141b2d] text-slate-300 border border-slate-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main Dynamic View Area */}
      <main className="flex-1">
        {/* ========================================================================= */}
        {/* 1. MULTI-MODEL BATTLE ARENA VIEW */}
        {/* ========================================================================= */}
        {activeMode === 'arena' && (
          <div className="p-4 lg:p-8 max-w-7xl mx-auto space-y-6">
            {/* Arena Header Bar */}
            <div className="bg-[#0e1424] p-5 rounded-2xl border border-cyan-900/40 shadow-xl space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950 px-2.5 py-0.5 rounded border border-cyan-800">
                      Live Benchmark Arena
                    </span>
                    <span className="text-xs text-slate-400">Concurrent 3-Way Model Execution</span>
                  </div>
                  <h2 className="text-2xl font-black text-white mt-1">Multi-Model Battle Arena</h2>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setArenaPrompt('Write an ultra-fast in-memory cache eviction algorithm in Rust with LRU and O(1) time complexity.');
                      runModelBattle('Write an ultra-fast in-memory cache eviction algorithm in Rust with LRU and O(1) time complexity.');
                    }}
                    className="text-xs bg-[#162038] hover:bg-[#1f2d4e] text-slate-300 hover:text-white px-3 py-1.5 rounded-xl border border-slate-700 font-medium transition-all"
                  >
                    Rust LRU Prompt
                  </button>
                  <button
                    onClick={() => {
                      setArenaPrompt('Design a high-throughput event-driven microservices architecture for real-time payments.');
                      runModelBattle('Design a high-throughput event-driven microservices architecture for real-time payments.');
                    }}
                    className="text-xs bg-[#162038] hover:bg-[#1f2d4e] text-slate-300 hover:text-white px-3 py-1.5 rounded-xl border border-slate-700 font-medium transition-all"
                  >
                    Event-Driven Prompt
                  </button>
                </div>
              </div>

              {/* Arena Prompt Input */}
              <div className="flex items-center gap-2 bg-[#080b13] p-1.5 rounded-xl border border-cyan-800/60 focus-within:border-cyan-400 transition-all">
                <input
                  type="text"
                  value={arenaPrompt}
                  onChange={(e) => setArenaPrompt(e.target.value)}
                  placeholder="Enter any complex programming or architectural prompt to run concurrently..."
                  className="flex-1 bg-transparent px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none"
                />
                <button
                  onClick={() => runModelBattle()}
                  disabled={isBattling}
                  className="px-5 py-2 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:opacity-90 disabled:opacity-50 text-slate-950 font-black rounded-lg text-xs flex items-center gap-1.5 shadow-md shadow-cyan-500/20 transition-all"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{isBattling ? 'Running Battle...' : 'Run Arena'}</span>
                </button>
              </div>
            </div>

            {/* 3-Column Arena Output Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Column 1: Cognita Nexus-9 (Winner) */}
              <div className="bg-[#0b101d] rounded-2xl border-2 border-cyan-500/80 p-5 space-y-4 shadow-xl shadow-cyan-950/40 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 bg-gradient-to-l from-cyan-500 to-indigo-600 text-slate-950 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-bl-xl shadow">
                  ★ WINNER • 86ms
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800 flex items-center justify-center font-bold">
                      <BrainCircuit className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-black text-sm text-white">Cognita Nexus-9</h3>
                      <div className="text-[10px] text-cyan-400 font-mono">Proprietary Neural Engine</div>
                    </div>
                  </div>

                  {/* Telemetry Strip */}
                  <div className="grid grid-cols-3 gap-1.5 text-center text-[10px] bg-[#070a12] p-2 rounded-xl border border-cyan-900/40 font-mono">
                    <div>
                      <div className="text-slate-500">Latency</div>
                      <div className="font-bold text-cyan-400">{battleResults?.cognita.latency || 86}ms</div>
                    </div>
                    <div>
                      <div className="text-slate-500">Cost/Req</div>
                      <div className="font-bold text-emerald-400">{battleResults?.cognita.cost || '$0.00042'}</div>
                    </div>
                    <div>
                      <div className="text-slate-500">Score</div>
                      <div className="font-bold text-amber-400">{battleResults?.cognita.rating || 9.9}/10</div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {battleResults?.cognita.text || 'Processing neural synthesis at sub-100ms latency...'}
                  </p>

                  <div className="bg-[#05070c] p-3 rounded-xl border border-cyan-900/40 font-mono text-[11px] text-cyan-300 overflow-x-auto custom-scrollbar">
                    <pre><code>{battleResults?.cognita.code}</code></pre>
                  </div>
                </div>

                <div className="pt-3 border-t border-cyan-900/40 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Tokens: {battleResults?.cognita.tokens || 312}</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Lowest Cost & Zero Lag
                  </span>
                </div>
              </div>

              {/* Column 2: Claude 3.5 Sonnet */}
              <div className="bg-[#0b101d] rounded-2xl border border-slate-800 p-5 space-y-4 shadow-lg flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-violet-950 text-violet-400 border border-violet-800 flex items-center justify-center font-bold">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-black text-sm text-white">Claude 3.5 Sonnet</h3>
                      <div className="text-[10px] text-slate-400 font-mono">Anthropic Frontier</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-1.5 text-center text-[10px] bg-[#070a12] p-2 rounded-xl border border-slate-800 font-mono">
                    <div>
                      <div className="text-slate-500">Latency</div>
                      <div className="font-bold text-violet-400">{battleResults?.claude.latency || 164}ms</div>
                    </div>
                    <div>
                      <div className="text-slate-500">Cost/Req</div>
                      <div className="font-bold text-slate-300">{battleResults?.claude.cost || '$0.00110'}</div>
                    </div>
                    <div>
                      <div className="text-slate-500">Score</div>
                      <div className="font-bold text-amber-400">{battleResults?.claude.rating || 9.4}/10</div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {battleResults?.claude.text || 'Synthesizing output...'}
                  </p>

                  <div className="bg-[#05070c] p-3 rounded-xl border border-slate-800 font-mono text-[11px] text-violet-300 overflow-x-auto custom-scrollbar">
                    <pre><code>{battleResults?.claude.code}</code></pre>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Tokens: {battleResults?.claude.tokens || 295}</span>
                  <span className="text-slate-400 font-medium">Standard High Accuracy</span>
                </div>
              </div>

              {/* Column 3: GPT-4o */}
              <div className="bg-[#0b101d] rounded-2xl border border-slate-800 p-5 space-y-4 shadow-lg flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-800 flex items-center justify-center font-bold">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-black text-sm text-white">GPT-4o (Omni)</h3>
                      <div className="text-[10px] text-slate-400 font-mono">OpenAI Enterprise</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-1.5 text-center text-[10px] bg-[#070a12] p-2 rounded-xl border border-slate-800 font-mono">
                    <div>
                      <div className="text-slate-500">Latency</div>
                      <div className="font-bold text-emerald-400">{battleResults?.gpt4o.latency || 182}ms</div>
                    </div>
                    <div>
                      <div className="text-slate-500">Cost/Req</div>
                      <div className="font-bold text-slate-300">{battleResults?.gpt4o.cost || '$0.00145'}</div>
                    </div>
                    <div>
                      <div className="text-slate-500">Score</div>
                      <div className="font-bold text-amber-400">{battleResults?.gpt4o.rating || 9.2}/10</div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {battleResults?.gpt4o.text || 'Synthesizing output...'}
                  </p>

                  <div className="bg-[#05070c] p-3 rounded-xl border border-slate-800 font-mono text-[11px] text-emerald-300 overflow-x-auto custom-scrollbar">
                    <pre><code>{battleResults?.gpt4o.code}</code></pre>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Tokens: {battleResults?.gpt4o.tokens || 340}</span>
                  <span className="text-slate-400 font-medium">Standard Omnimodal</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 2. AUTONOMOUS MULTI-AGENT WORKFLOW STUDIO */}
        {/* ========================================================================= */}
        {activeMode === 'agents' && (
          <div className="p-4 lg:p-8 max-w-7xl mx-auto space-y-6">
            <div className="bg-[#0e1424] p-5 rounded-2xl border border-violet-900/40 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-violet-400 bg-violet-950 px-2.5 py-0.5 rounded border border-violet-800">
                  Autonomous Swarm Canvas
                </span>
                <h2 className="text-2xl font-black text-white mt-1">Multi-Agent Workflow Orchestrator</h2>
                <p className="text-xs text-slate-400">
                  Chain autonomous specialist agents to execute complex software migrations and research pipelines.
                </p>
              </div>

              <button
                onClick={runAgentPipeline}
                disabled={isRunningPipeline}
                className="px-6 py-2.5 bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 hover:opacity-90 disabled:opacity-50 text-white font-bold rounded-xl text-xs flex items-center gap-2 shadow-lg shadow-violet-900/50 transition-all shrink-0"
              >
                <Workflow className="w-4 h-4" />
                <span>{isRunningPipeline ? 'Agents Executing...' : 'Execute Swarm Pipeline'}</span>
              </button>
            </div>

            {/* Visual Pipeline Nodes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                {
                  step: 1,
                  title: 'Research Agent',
                  role: 'Data Mining & Telemetry',
                  desc: 'Inspects schemas, queries logs, and scans codebase dependencies.',
                  color: 'cyan',
                  active: agentStep >= 1
                },
                {
                  step: 2,
                  title: 'Reasoning Agent',
                  role: 'Neural Architecture',
                  desc: 'Applies transformer reasoning to synthesize zero-downtime execution plans.',
                  color: 'violet',
                  active: agentStep >= 2
                },
                {
                  step: 3,
                  title: 'Code Synthesis Agent',
                  role: 'Automated Compilation',
                  desc: 'Generates TypeScript, SQL migrations, and tests with 100% strict typing.',
                  color: 'amber',
                  active: agentStep >= 3
                },
                {
                  step: 4,
                  title: 'QA & Compliance Agent',
                  role: 'Security & Verification',
                  desc: 'Performs AST vulnerability audits, regression checks, and opens PR.',
                  color: 'emerald',
                  active: agentStep >= 4
                }
              ].map((agent) => (
                <div
                  key={agent.step}
                  className={`p-4 rounded-2xl border transition-all space-y-3 ${
                    agent.active
                      ? 'bg-[#0f172a] border-cyan-500/80 shadow-lg shadow-cyan-950/40'
                      : 'bg-[#0a0d16] border-slate-800 opacity-60'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#070a12] text-slate-400 border border-slate-800">
                      NODE 0{agent.step}
                    </span>
                    {agent.active && (
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    )}
                  </div>

                  <div>
                    <h4 className="font-bold text-white text-sm">{agent.title}</h4>
                    <div className="text-[10px] text-cyan-400 font-mono">{agent.role}</div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">{agent.desc}</p>
                </div>
              ))}
            </div>

            {/* Live Terminal Output Console */}
            <div className="bg-[#05070c] rounded-2xl border border-slate-800 p-4 space-y-3 font-mono text-xs shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-slate-400 text-[11px]">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span>Agent Swarm Real-Time Execution Console</span>
                </div>
                <span className="text-emerald-400">Stream Status: Active</span>
              </div>

              <div className="space-y-1.5 max-h-60 overflow-y-auto custom-scrollbar p-1">
                {agentLogs.map((log, i) => (
                  <div key={i} className="flex items-start gap-2 leading-relaxed">
                    <span className="text-slate-600 text-[10px] select-none">[{log.time}]</span>
                    <span className={`font-bold ${log.color} select-none`}>{log.agent}:</span>
                    <span className="text-slate-200">{log.msg}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 3. NEURAL TELEMETRY & TOKEN ANALYTICS VIEW */}
        {/* ========================================================================= */}
        {activeMode === 'telemetry' && (
          <div className="p-4 lg:p-8 max-w-7xl mx-auto space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950 px-2.5 py-0.5 rounded border border-emerald-800">
                  Real-Time Cluster Telemetry
                </span>
                <h2 className="text-2xl font-black text-white mt-1">Neural Infrastructure Metrics</h2>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono bg-[#0c101c] px-3 py-1.5 rounded-xl border border-slate-800">
                <span className="text-slate-400">Cache Hit Ratio:</span>
                <span className="text-emerald-400 font-bold">88.4%</span>
              </div>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-[#0c101c] p-4 rounded-2xl border border-slate-800 space-y-1">
                <div className="text-xs text-slate-400 font-medium">Daily Token Consumption</div>
                <div className="text-2xl font-black text-white font-mono">1,482,900</div>
                <div className="text-[11px] text-emerald-400 flex items-center gap-1 font-mono">
                  <TrendingUp className="w-3 h-3" /> +24% vs yesterday
                </div>
              </div>
              <div className="bg-[#0c101c] p-4 rounded-2xl border border-slate-800 space-y-1">
                <div className="text-xs text-slate-400 font-medium">P99 Latency SLA</div>
                <div className="text-2xl font-black text-cyan-400 font-mono">84.2 ms</div>
                <div className="text-[11px] text-slate-400 font-mono">Sub-100ms guaranteed</div>
              </div>
              <div className="bg-[#0c101c] p-4 rounded-2xl border border-slate-800 space-y-1">
                <div className="text-xs text-slate-400 font-medium">Monthly Cost Efficiency</div>
                <div className="text-2xl font-black text-emerald-400 font-mono">₹1,84,000</div>
                <div className="text-[11px] text-slate-400 font-mono">Saved vs OpenAI standard</div>
              </div>
              <div className="bg-[#0c101c] p-4 rounded-2xl border border-slate-800 space-y-1">
                <div className="text-xs text-slate-400 font-medium">Model Drift Anomaly</div>
                <div className="text-2xl font-black text-violet-400 font-mono">0.00%</div>
                <div className="text-[11px] text-emerald-400 font-mono">100% Deterministic</div>
              </div>
            </div>

            {/* Simulated Visual Graph Card */}
            <div className="bg-[#0c101c] p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-white text-sm">24-Hour Throughput & Concurrency Load</h3>
                  <p className="text-xs text-slate-400">Tokens generated per second across 12 distributed node regions</p>
                </div>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950 px-2.5 py-1 rounded border border-cyan-800">
                  Peak: 4,800 tps
                </span>
              </div>

              {/* Bar visualization */}
              <div className="h-44 flex items-end gap-2 pt-6 pb-2 border-b border-slate-800">
                {[
                  { hour: '00:00', val: 30 },
                  { hour: '03:00', val: 20 },
                  { hour: '06:00', val: 45 },
                  { hour: '09:00', val: 80 },
                  { hour: '12:00', val: 95 },
                  { hour: '15:00', val: 88 },
                  { hour: '18:00', val: 75 },
                  { hour: '21:00', val: 60 }
                ].map((b, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2 group">
                    <div
                      style={{ height: `${b.val}%` }}
                      className="w-full bg-gradient-to-t from-cyan-600 to-indigo-500 rounded-t-lg group-hover:brightness-125 transition-all relative"
                    >
                      <div className="opacity-0 group-hover:opacity-100 absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-1.5 py-0.5 rounded font-mono pointer-events-none transition-all">
                        {b.val * 50}tps
                      </div>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">{b.hour}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 4. DEVELOPER SDK & API PLAYGROUND */}
        {/* ========================================================================= */}
        {activeMode === 'api' && (
          <div className="p-4 lg:p-8 max-w-7xl mx-auto space-y-6">
            <div className="bg-[#0e1424] p-5 rounded-2xl border border-indigo-900/40 shadow-xl space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 bg-indigo-950 px-2.5 py-0.5 rounded border border-indigo-800">
                Developer Documentation & Sandbox
              </span>
              <h2 className="text-2xl font-black text-white">Unified Enterprise API & SDKs</h2>
              <p className="text-xs text-slate-400">
                Integrate Cognita Nexus-9 into your production applications with 3 lines of code.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Code Snippet Column */}
              <div className="lg:col-span-7 bg-[#090c15] rounded-2xl border border-slate-800 overflow-hidden flex flex-col shadow-xl">
                {/* Language Tabs */}
                <div className="bg-[#0f1424] px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {(['python', 'node', 'go', 'curl'] as const).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => setApiLang(lang)}
                        className={`px-3 py-1 rounded-lg text-xs font-bold font-mono uppercase transition-all ${
                          apiLang === lang ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      navigator.clipboard?.writeText(
                        apiLang === 'python'
                          ? `import cognita\n\nclient = cognita.Client(api_key="cog_max_live_992x")\nresponse = client.chat.completions.create(\n    model="cognita-nexus-9",\n    messages=[{"role": "user", "content": "Hello Cognita"}],\n    temperature=0.7\n)\nprint(response.choices[0].message.content)`
                          : `curl https://api.cognita.ai/v1/chat/completions \\\n  -H "Authorization: Bearer cog_max_live_992x" \\\n  -H "Content-Type: application/json" \\\n  -d '{"model": "cognita-nexus-9", "messages": [{"role": "user", "content": "Hello"}]}'`
                      );
                      setCopiedCode(true);
                      setTimeout(() => setCopiedCode(false), 2000);
                    }}
                    className="flex items-center gap-1 text-[11px] text-slate-300 hover:text-white px-2.5 py-1 rounded bg-[#162038] hover:bg-indigo-600 transition-all font-mono"
                  >
                    {copiedCode ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedCode ? 'Copied' : 'Copy SDK Code'}</span>
                  </button>
                </div>

                {/* Code Window */}
                <div className="p-4 font-mono text-xs leading-relaxed text-indigo-300 overflow-x-auto custom-scrollbar flex-1 bg-[#05070c]">
                  {apiLang === 'python' && (
                    <pre><code>{`import cognita

client = cognita.Client(
    api_key="cog_max_live_992x_enterprise",
    base_url="https://api.cognita.ai/v1"
)

response = client.chat.completions.create(
    model="cognita-nexus-9",
    messages=[
        {"role": "system", "content": "You are an Enterprise Solutions Architect."},
        {"role": "user", "content": "Optimize distributed rate limiter with Redis."}
    ],
    temperature=0.7,
    stream=True
)

for chunk in response:
    print(chunk.choices[0].delta.content or "", end="")`}</code></pre>
                  )}

                  {apiLang === 'node' && (
                    <pre><code>{`import { CognitaClient } from '@cognita/ai-sdk';

const cognita = new CognitaClient({
  apiKey: process.env.COGNITA_API_KEY,
});

const completion = await cognita.chat.completions.create({
  model: 'cognita-nexus-9',
  messages: [{ role: 'user', content: 'Generate high-speed DB schema' }],
  temperature: 0.7,
});

console.log(completion.choices[0].message.content);`}</code></pre>
                  )}

                  {apiLang === 'go' && (
                    <pre><code>{`package main

import (
  "context"
  "fmt"
  "github.com/cognita-ai/sdk-go"
)

func main() {
  client := cognita.NewClient("cog_max_live_992x")
  resp, _ := client.CreateChat(context.Background(), cognita.ChatRequest{
    Model: "cognita-nexus-9",
    Prompt: "Synthesize distributed cache",
  })
  fmt.Println(resp.Content)
}`}</code></pre>
                  )}

                  {apiLang === 'curl' && (
                    <pre><code>{`curl https://api.cognita.ai/v1/chat/completions \\
  -H "Authorization: Bearer cog_max_live_992x_enterprise" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "cognita-nexus-9",
    "messages": [{"role": "user", "content": "Execute rate limiter"}],
    "temperature": 0.7
  }'`}</code></pre>
                  )}
                </div>

                {/* Sandbox Runner */}
                <div className="p-3 bg-[#0a0d16] border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-mono">Sandbox API: https://api.cognita.ai/v1</span>
                  <button
                    onClick={testApiEndpoint}
                    disabled={isTestingApi}
                    className="px-4 py-1.5 bg-gradient-to-r from-indigo-600 to-cyan-500 hover:opacity-90 disabled:opacity-50 text-white font-bold rounded-lg text-xs flex items-center gap-1.5 shadow"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{isTestingApi ? 'Invoking Endpoint...' : 'Test Endpoint Live'}</span>
                  </button>
                </div>
              </div>

              {/* Live JSON Response Column */}
              <div className="lg:col-span-5 bg-[#090c15] rounded-2xl border border-slate-800 p-4 flex flex-col space-y-3 font-mono text-xs shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400 font-bold">Simulated JSON Output</span>
                  <span className="text-emerald-400 text-[10px]">HTTP 200 OK (84ms)</span>
                </div>

                <div className="flex-1 bg-[#05070c] p-3 rounded-xl border border-slate-800/80 overflow-y-auto custom-scrollbar text-emerald-300">
                  <pre>
                    <code>
                      {apiResponse ||
                        JSON.stringify(
                          {
                            status: 'ready',
                            endpoint: 'POST /v1/chat/completions',
                            hint: 'Click "Test Endpoint Live" to simulate real-time JSON response.'
                          },
                          null,
                          2
                        )}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 5. ROI CALCULATOR & ENTERPRISE QUOTATION */}
        {/* ========================================================================= */}
        {activeMode === 'roi' && (
          <div className="p-4 lg:p-8 max-w-5xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 bg-amber-950 px-3 py-1 rounded-full border border-amber-800">
                Enterprise Value Engineering
              </span>
              <h2 className="text-3xl font-black text-white">ROI & Infrastructure Calculator</h2>
              <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
                Quantify annual developer hours saved and direct LLM API cost reductions with Cognita Nexus-9.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Sliders Card */}
              <div className="bg-[#0c101c] p-6 rounded-2xl border border-slate-800 space-y-6 shadow-xl">
                <h3 className="font-bold text-white text-base flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-cyan-400" />
                  Your Organization Parameters
                </h3>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Engineering Team Size:</span>
                    <span className="font-mono font-bold text-cyan-400">{teamSize} Engineers</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="250"
                    step="5"
                    value={teamSize}
                    onChange={(e) => setTeamSize(parseInt(e.target.value))}
                    className="w-full accent-cyan-400 cursor-pointer"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Monthly Query Volume:</span>
                    <span className="font-mono font-bold text-violet-400">{(monthlyQueries / 1000000).toFixed(1)}M Queries</span>
                  </div>
                  <input
                    type="range"
                    min="500000"
                    max="20000000"
                    step="500000"
                    value={monthlyQueries}
                    onChange={(e) => setMonthlyQueries(parseInt(e.target.value))}
                    className="w-full accent-violet-400 cursor-pointer"
                  />
                </div>

                <div className="pt-4 border-t border-slate-800 space-y-2 text-xs">
                  <div className="text-slate-400">Enterprise Compliance Badges:</div>
                  <div className="flex flex-wrap gap-2 text-[10px] font-mono">
                    <span className="px-2 py-0.5 rounded bg-[#162038] text-cyan-300 border border-cyan-800/60">SOC2 Type II</span>
                    <span className="px-2 py-0.5 rounded bg-[#162038] text-violet-300 border border-violet-800/60">HIPAA Compliant</span>
                    <span className="px-2 py-0.5 rounded bg-[#162038] text-emerald-300 border border-emerald-800/60">ISO 27001</span>
                    <span className="px-2 py-0.5 rounded bg-[#162038] text-amber-300 border border-amber-800/60">GDPR Zero Retention</span>
                  </div>
                </div>
              </div>

              {/* Calculated Outputs Card */}
              <div className="bg-gradient-to-br from-[#0c101c] via-[#101728] to-[#070a12] p-6 rounded-2xl border-2 border-cyan-500/60 space-y-6 shadow-2xl flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="text-xs uppercase font-bold tracking-widest text-cyan-400 font-mono">
                    Estimated Annual Value
                  </div>

                  <div className="space-y-1">
                    <div className="text-3xl sm:text-4xl font-black text-white font-mono">
                      ₹{estimatedAnnualSavings}
                    </div>
                    <div className="text-xs text-slate-400">Annual Net OpEx Savings Generated</div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="bg-[#080b13] p-3 rounded-xl border border-slate-800">
                      <div className="text-xl font-bold text-cyan-400 font-mono">{devHoursSaved} hrs</div>
                      <div className="text-[10px] text-slate-400">Dev Time Saved / Month</div>
                    </div>
                    <div className="bg-[#080b13] p-3 rounded-xl border border-slate-800">
                      <div className="text-xl font-bold text-emerald-400 font-mono">3.8x</div>
                      <div className="text-[10px] text-slate-400">Deployment Speedup</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 space-y-3">
                  {customInquirySent ? (
                    <div className="text-center p-3 bg-emerald-950/80 rounded-xl border border-emerald-700 text-xs text-emerald-300">
                      ✓ Enterprise Quote Request Dispatched. Our Solutions Architect will reach out today.
                    </div>
                  ) : (
                    <button
                      onClick={() => setCustomInquirySent(true)}
                      className="w-full py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-black rounded-xl text-xs shadow-lg shadow-cyan-500/25 transition-all"
                    >
                      Request Custom Enterprise SLA Quotation (₹59,999 Max Plan)
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 6. GENERAL OVERVIEW VIEW */}
        {/* ========================================================================= */}
        {activeMode === 'overview' && (
          <div className="py-8 px-4 lg:px-12 max-w-6xl mx-auto space-y-8">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950 px-3 py-1 rounded-full border border-cyan-800">
                Cognita OS Max Tier (₹59,999)
              </span>
              <h2 className="text-3xl font-black text-white">Full Enterprise AI Operating System</h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                The ultimate tier for modern AI tech companies requiring multi-agent execution, concurrent model arenas, and real-time telemetry dashboards.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div
                onClick={() => setActiveMode('arena')}
                className="bg-[#0c101c] hover:bg-[#12182a] p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/60 transition-all cursor-pointer space-y-3"
              >
                <Gauge className="w-6 h-6 text-cyan-400" />
                <h3 className="font-bold text-white text-base">Model Battle Arena</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Compare Cognita Nexus-9, Claude 3.5 Sonnet, and GPT-4o side-by-side with latency, cost, and code diffing.
                </p>
                <div className="text-xs text-cyan-400 font-bold flex items-center gap-1">
                  Launch Arena <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

              <div
                onClick={() => setActiveMode('agents')}
                className="bg-[#0c101c] hover:bg-[#12182a] p-6 rounded-2xl border border-slate-800 hover:border-violet-500/60 transition-all cursor-pointer space-y-3"
              >
                <Workflow className="w-6 h-6 text-violet-400" />
                <h3 className="font-bold text-white text-base">Autonomous Swarm Canvas</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Interactive multi-agent pipeline: Research, Reasoning, Code Synthesis, and QA Compliance in one workflow.
                </p>
                <div className="text-xs text-violet-400 font-bold flex items-center gap-1">
                  Launch Canvas <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

              <div
                onClick={() => setActiveMode('telemetry')}
                className="bg-[#0c101c] hover:bg-[#12182a] p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/60 transition-all cursor-pointer space-y-3"
              >
                <BarChart3 className="w-6 h-6 text-emerald-400" />
                <h3 className="font-bold text-white text-base">Neural Telemetry</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  24-hour token consumption graphs, sub-100ms latency monitors, and automated cost optimization tracking.
                </p>
                <div className="text-xs text-emerald-400 font-bold flex items-center gap-1">
                  View Metrics <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Futuristic Enterprise Footer */}
      <footer className="mt-auto border-t border-cyan-900/30 bg-[#06080e] px-4 lg:px-8 py-3.5 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2 shrink-0 font-mono">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-slate-400">Cognita Neural Cluster v5.0 Max • Global Ingress Active</span>
        </div>
        <div>
          <span>© 2025 Cognita AI Enterprise OS. SOC2 Type II Certified.</span>
        </div>
      </footer>
    </div>
  );
};
