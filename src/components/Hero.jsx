import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Play,
  Sparkles,
  ArrowRight,
  Wand2,
  CheckCircle2,
  TrendingUp,
  Globe2,
  Layers,
  Copy,
  Check,
  RefreshCw,
  Sliders,
  Zap,
  BarChart3,
  FileText,
} from 'lucide-react';

const PRESET_PROMPTS = [
  {
    id: 'saas-launch',
    label: 'Product Launch Thread',
    tone: 'High-Converting & Bold',
    prompt: 'Generate a viral product launch hook & value breakdown for Synthetix 4.2 Neural Engine.',
    title: 'Introducing Synthetix 4.2: Cognitive Velocity at Scale',
    content:
      'Stop staring at blinking cursors. Synthetix 4.2 combines deep semantic memory with real-time SERP intelligence to turn rough bullet points into category-defining essays, landing pages, and growth campaigns in 3.4 seconds.',
    metrics: { seo: 98, readability: 'Grade A+', engagement: '+340% CTR' },
    keywords: ['AI Copywriting', 'Neural Engine', 'Growth Marketing', 'Zero-Shot SEO'],
  },
  {
    id: 'seo-pillar',
    label: 'SEO Pillar Article',
    tone: 'Authoritative & Analytical',
    prompt: 'Draft an executive intro on Enterprise LLM adoption and organic search dominance in 2026.',
    title: 'Why Semantic Depth Beats Volume in Modern Search',
    content:
      'Search algorithms now reward original synthesis over surface-level summaries. By mapping 140+ latent entity relationships automatically, Synthetix structures long-form authority pieces that capture top-tier SERP positions on day one.',
    metrics: { seo: 99, readability: 'Executive', engagement: '4.8m Avg Read' },
    keywords: ['Semantic SEO', 'Entity Mapping', 'Organic Authority', 'LLM Ops'],
  },
  {
    id: 'ad-hooks',
    label: 'Viral Ad Hooks',
    tone: 'Punchy & Direct',
    prompt: 'Create 3 high-converting paid social hooks for B2B founders tired of generic AI text.',
    title: '3 High-Retention Hooks Ready for Deployment',
    content:
      '1. "Your competitors aren\'t writing faster—they\'re training custom brand brains. Here\'s how." • 2. "We replaced 4 content tools with one neural workspace and cut CAC by 42%." • 3. "Generic AI sounds like a robot. Synthetix sounds like your best copywriter on their best day."',
    metrics: { seo: 95, readability: 'Ultra-Crisp', engagement: '4.9% Thumbstop' },
    keywords: ['Paid Social', 'B2B SaaS', 'Thumbstop Rate', 'Brand Voice'],
  },
];

const Hero = ({ onOpenTrialModal, onOpenDemoModal }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const currentPreset = PRESET_PROMPTS[activeTab];

  const handleTabSwitch = (index) => {
    if (index === activeTab) return;
    setIsGenerating(true);
    setActiveTab(index);
    setTimeout(() => setIsGenerating(false), 320);
  };

  const handleCopy = () => {
    navigator.clipboard?.writeText(`${currentPreset.title}\n\n${currentPreset.content}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Ambient Radial Spotlights */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-tr from-[#8B5CF6]/25 via-[#06B6D4]/15 to-transparent rounded-full blur-[130px] -z-10" />
      <div className="pointer-events-none absolute top-72 right-10 w-80 h-80 bg-[#06B6D4]/15 rounded-full blur-[120px] -z-10" />
      <div className="pointer-events-none absolute top-60 left-10 w-80 h-80 bg-[#8B5CF6]/20 rounded-full blur-[120px] -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Header Content */}
        <div className="mx-auto max-w-4xl text-center">
          {/* Top Announcement Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 backdrop-blur-md mb-8 shadow-[0_0_25px_rgba(139,92,246,0.2)]"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
            <span className="text-xs sm:text-sm font-medium bg-gradient-to-r from-violet-200 via-white to-cyan-200 bg-clip-text text-transparent">
              Synthetix Neural Engine 4.2 is Live — 3x Context Window
            </span>
            <ArrowRight className="h-3.5 w-3.5 text-cyan-400" />
          </motion.div>

          {/* Main Glowing Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6"
          >
            <span className="text-white">Write 10x Faster with </span>
            <span className="bg-gradient-to-r from-[#8B5CF6] via-fuchsia-400 to-[#06B6D4] bg-clip-text text-transparent text-glow">
              Next-Gen AI
            </span>
          </motion.h1>

          {/* Value Proposition Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base sm:text-lg lg:text-xl text-zinc-400 leading-relaxed mb-10"
          >
            Transform raw ideas into high-converting landing pages, SEO-dominant articles, and viral social hooks in seconds. Trained on your brand voice with zero robotic fluff.
          </motion.p>

          {/* Primary & Secondary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onOpenTrialModal && onOpenTrialModal('Free Trial')}
              className="w-full sm:w-auto relative group overflow-hidden rounded-2xl bg-gradient-to-r from-[#8B5CF6] via-indigo-500 to-[#06B6D4] p-[1px] shadow-[0_0_40px_rgba(139,92,246,0.5)] hover:shadow-[0_0_60px_rgba(6,182,212,0.65)] transition-all duration-300"
            >
              <div className="relative flex items-center justify-center gap-3 rounded-[15px] bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] px-8 py-4 text-base font-bold text-white">
                <Sparkles className="h-5 w-5 text-white animate-pulse" />
                <span>Start Writing for Free</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onOpenDemoModal && onOpenDemoModal()}
              className="w-full sm:w-auto flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] hover:border-cyan-400/40 px-8 py-4 text-base font-semibold text-zinc-100 backdrop-blur-xl transition-all duration-300"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-[#8B5CF6] to-[#06B6D4] text-white shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                <Play className="h-3.5 w-3.5 fill-white ml-0.5" />
              </span>
              <span>Watch Demo</span>
              <span className="text-xs font-mono text-zinc-400 border border-white/10 rounded-md px-1.5 py-0.5">
                2:14
              </span>
            </motion.button>
          </motion.div>

          {/* Trust Signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm text-zinc-400 mb-16"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-cyan-400" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-violet-400" />
              <span>10,000 free neural words</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-cyan-400" />
              <span>SOC2 Type II Encrypted</span>
            </div>
          </motion.div>
        </div>

        {/* Floating Glassmorphic Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto max-w-6xl"
        >
          {/* Outer Neon Halo */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#8B5CF6] via-[#06B6D4] to-[#8B5CF6] opacity-30 blur-2xl" />

          {/* Floating Badge Top Left */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="hidden lg:flex absolute -left-8 top-16 z-20 items-center gap-3 rounded-2xl border border-violet-500/30 bg-zinc-950/90 p-3.5 backdrop-blur-xl shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20 border border-violet-500/40 text-violet-300">
              <Wand2 className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">Brand Voice Synced</div>
              <div className="text-[11px] text-emerald-400 font-mono">99.4% Tone Match</div>
            </div>
          </motion.div>

          {/* Floating Badge Bottom Right */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="hidden lg:flex absolute -right-8 bottom-16 z-20 items-center gap-3 rounded-2xl border border-cyan-500/30 bg-zinc-950/90 p-3.5 backdrop-blur-xl shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300">
              <TrendingUp className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">Live SERP Score</div>
              <div className="text-[11px] text-cyan-400 font-mono">
                {currentPreset.metrics.seo}/100 Rank Ready
              </div>
            </div>
          </motion.div>

          {/* Main Glass Window */}
          <div className="relative rounded-3xl border border-white/15 bg-zinc-900/60 backdrop-blur-2xl shadow-2xl overflow-hidden">
            {/* Browser Top Chrome Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-zinc-950/70 px-5 py-3.5">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                <span className="ml-3 text-xs font-mono text-zinc-400 hidden sm:inline">
                  app.synthetix.ai/studio/neural-editor
                </span>
              </div>

              {/* Interactive Preset Switcher inside Mockup */}
              <div className="flex items-center gap-1.5 rounded-xl bg-zinc-900 border border-white/10 p-1">
                {PRESET_PROMPTS.map((preset, idx) => (
                  <button
                    key={preset.id}
                    onClick={() => handleTabSwitch(idx)}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                      activeTab === idx
                        ? 'bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] text-white shadow-sm'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>

              <div className="hidden sm:flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 text-[11px] font-mono text-emerald-300">
                  <Zap className="h-3 w-3 fill-emerald-400 text-emerald-400" />
                  380 tokens/sec
                </span>
              </div>
            </div>

            {/* Studio Workspace Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">
              {/* Left Sidebar: Neural Controls */}
              <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-white/10 bg-zinc-950/40 p-5 flex flex-col justify-between">
                <div className="space-y-5">
                  <div>
                    <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                      <span>Active Prompt Context</span>
                      <span className="text-cyan-400 font-mono">GPT-Synthetix-4o</span>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-zinc-900/90 p-3.5 text-xs text-zinc-300 font-mono leading-relaxed">
                      &gt; {currentPreset.prompt}
                    </div>
                  </div>

                  {/* Tone & Creativity Sliders */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-zinc-400 flex items-center gap-1.5">
                        <Sliders className="h-3.5 w-3.5 text-violet-400" />
                        Voice Profile
                      </span>
                      <span className="text-violet-300 font-medium">{currentPreset.tone}</span>
                    </div>
                    <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full w-4/5 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] rounded-full" />
                    </div>
                  </div>

                  {/* Semantic Keywords */}
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2.5">
                      Injected Semantic Entities
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {currentPreset.keywords.map((kw) => (
                        <span
                          key={kw}
                          className="inline-flex items-center gap-1 rounded-lg border border-cyan-500/25 bg-cyan-500/10 px-2.5 py-1 text-[11px] font-medium text-cyan-200"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Regenerate Action */}
                <div className="pt-5 mt-5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] text-zinc-500 font-mono">
                    Latency: 0.42s • 0% Plagiarism
                  </span>
                  <button
                    onClick={() => handleTabSwitch((activeTab + 1) % PRESET_PROMPTS.length)}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 px-3 py-1.5 text-xs font-medium text-zinc-200 transition-colors"
                  >
                    <RefreshCw className={`h-3.5 w-3.5 ${isGenerating ? 'animate-spin text-cyan-400' : ''}`} />
                    <span>Cycle Output</span>
                  </button>
                </div>
              </div>

              {/* Right Editor Output Canvas */}
              <div className="lg:col-span-8 p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-zinc-900/40 via-zinc-950/60 to-violet-950/20">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-violet-500/20 text-violet-300">
                        <FileText className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                        Neural Canvas Output
                      </span>
                    </div>

                    <button
                      onClick={handleCopy}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-zinc-900/80 hover:border-cyan-400/40 px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white transition-all"
                    >
                      {copied ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-400" />
                          <span className="text-emerald-300">Copied to Clipboard</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5 text-zinc-400" />
                          <span>Copy Copywriting</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Generated Title & Body */}
                  <motion.div
                    key={currentPreset.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-snug">
                      {currentPreset.title}
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-300 leading-relaxed border-l-2 border-cyan-400/60 pl-4 py-1">
                      {currentPreset.content}
                    </p>
                  </motion.div>
                </div>

                {/* Bottom Live Telemetry Cards */}
                <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-3 gap-3 sm:gap-4">
                  <div className="rounded-xl border border-white/[0.08] bg-zinc-950/60 p-3">
                    <div className="flex items-center gap-1.5 text-[11px] text-zinc-400 mb-1">
                      <BarChart3 className="h-3.5 w-3.5 text-cyan-400" />
                      <span>SEO Optimization</span>
                    </div>
                    <div className="text-base sm:text-lg font-bold text-white font-mono">
                      {currentPreset.metrics.seo}
                      <span className="text-xs text-cyan-400 font-normal"> / 100</span>
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/[0.08] bg-zinc-950/60 p-3">
                    <div className="flex items-center gap-1.5 text-[11px] text-zinc-400 mb-1">
                      <Layers className="h-3.5 w-3.5 text-violet-400" />
                      <span>Clarity Index</span>
                    </div>
                    <div className="text-base sm:text-lg font-bold text-white font-mono">
                      {currentPreset.metrics.readability}
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/[0.08] bg-zinc-950/60 p-3">
                    <div className="flex items-center gap-1.5 text-[11px] text-zinc-400 mb-1">
                      <Globe2 className="h-3.5 w-3.5 text-emerald-400" />
                      <span>Predicted Lift</span>
                    </div>
                    <div className="text-base sm:text-lg font-bold text-emerald-400 font-mono">
                      {currentPreset.metrics.engagement}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
