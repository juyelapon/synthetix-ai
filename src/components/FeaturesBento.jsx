import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Search,
  Globe,
  Cpu,
  ShieldCheck,
  Share2,
  ArrowUpRight,
  Flame,
  TrendingUp,
  Languages,
  Fingerprint,
} from 'lucide-react';

const FeaturesBento = () => {
  return (
    <section id="features" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Subtle Ambient Glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#8B5CF6]/15 to-[#06B6D4]/15 blur-[130px] -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-300 mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Engineered for Velocity</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-5">
            One Neural Workspace.{' '}
            <span className="bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent">
              Infinite Leverage.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            Every module in Synthetix AI is purpose-built to eliminate writer&apos;s block, dominate organic search, and scale your brand across every channel simultaneously.
          </p>
        </motion.div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Auto-Generate Hooks (Large 7-col card) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.015 }}
            className="md:col-span-7 group relative rounded-3xl border border-white/10 bg-zinc-900/50 p-7 sm:p-9 backdrop-blur-xl overflow-hidden hover:border-violet-500/50 hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.4)] transition-all duration-300"
          >
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#8B5CF6]/15 blur-3xl group-hover:bg-[#8B5CF6]/30 transition-all duration-500" />

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#8B5CF6]/20 to-[#06B6D4]/20 border border-violet-500/30 text-violet-300 shadow-[0_0_20px_rgba(139,92,246,0.25)]">
                    <Flame className="h-6 w-6 text-violet-400" />
                  </div>
                  <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-mono text-violet-300">
                    +310% Engagement Lift
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-white mb-3 flex items-center gap-2">
                  <span>Auto-Generate Hooks</span>
                  <ArrowUpRight className="h-5 w-5 text-zinc-500 group-hover:text-violet-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </h3>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
                  Trained on 50M+ top-performing social threads, VSL scripts, and newsletter subject lines. Generate scroll-stopping hooks scored by predicted retention before you publish.
                </p>
              </div>

              {/* Interactive Visual Snippet Inside Card */}
              <div className="space-y-2.5 rounded-2xl border border-white/10 bg-zinc-950/80 p-4">
                {[
                  {
                    tag: 'Viral Thread',
                    text: '"99% of teams prompt AI wrong. Here is the 4-layer context framework we use:"',
                    score: '98% Thumbstop',
                    color: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
                  },
                  {
                    tag: 'Cold Email',
                    text: '"Quick question about your Q4 organic pipeline velocity..."',
                    score: '74% Open Rate',
                    color: 'text-violet-300 border-violet-500/30 bg-violet-500/10',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-xl border border-white/[0.06] bg-zinc-900/70 px-3.5 py-2.5 text-xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 bg-white/5 px-2 py-0.5 rounded">
                        {item.tag}
                      </span>
                      <span className="text-zinc-200 font-medium">{item.text}</span>
                    </div>
                    <span className={`shrink-0 rounded-md border px-2 py-0.5 font-mono text-[11px] ${item.color}`}>
                      {item.score}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 2: Real-Time SEO Optimization (5-col card) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.015 }}
            className="md:col-span-5 group relative rounded-3xl border border-white/10 bg-zinc-900/50 p-7 sm:p-9 backdrop-blur-xl overflow-hidden hover:border-cyan-500/50 hover:shadow-[0_0_40px_-10px_rgba(6,182,212,0.4)] transition-all duration-300"
          >
            <div className="absolute -left-16 -bottom-16 h-60 w-60 rounded-full bg-[#06B6D4]/15 blur-3xl group-hover:bg-[#06B6D4]/30 transition-all duration-500" />

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.25)]">
                    <Search className="h-6 w-6 text-cyan-400" />
                  </div>
                  <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-mono text-cyan-300">
                    Live SERP Engine
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-white mb-3">
                  SEO Optimization
                </h3>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
                  Automatically analyzes top-ranking competitors and weaves high-intent NLP keywords, headers, and schema into every paragraph as you generate.
                </p>
              </div>

              {/* SEO Score Meter Visual */}
              <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-zinc-400 font-medium">Real-Time Rank Authority</span>
                  <span className="text-sm font-mono font-bold text-cyan-400 flex items-center gap-1">
                    <TrendingUp className="h-3.5 w-3.5" /> 98 / 100
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '96%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4]"
                  />
                </div>
                <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                  <div className="rounded-lg bg-white/[0.03] p-2">
                    <div className="text-[10px] text-zinc-500">Keywords</div>
                    <div className="text-xs font-mono font-semibold text-emerald-400">24/24</div>
                  </div>
                  <div className="rounded-lg bg-white/[0.03] p-2">
                    <div className="text-[10px] text-zinc-500">Headings</div>
                    <div className="text-xs font-mono font-semibold text-cyan-300">Optimal</div>
                  </div>
                  <div className="rounded-lg bg-white/[0.03] p-2">
                    <div className="text-[10px] text-zinc-500">Originality</div>
                    <div className="text-xs font-mono font-semibold text-violet-300">100%</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Multilingual Neural Translation (4-col card) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-4 group relative rounded-3xl border border-white/10 bg-zinc-900/50 p-7 backdrop-blur-xl overflow-hidden hover:border-violet-500/50 hover:shadow-[0_0_35px_-10px_rgba(139,92,246,0.35)] transition-all duration-300"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15 border border-violet-500/30 text-violet-300 mb-6">
              <Languages className="h-6 w-6 text-violet-400" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-2.5">
              45+ Multilingual Native Fluency
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Localize idioms, cultural nuance, and conversion psychology across 45+ languages simultaneously without losing your brand edge.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {['EN 🇺🇸', 'ES 🇪🇸', 'DE 🇩🇪', 'JP 🇯🇵', 'FR 🇫🇷', 'KR 🇰🇷', '+39 More'].map((lang) => (
                <span
                  key={lang}
                  className="rounded-lg border border-white/10 bg-zinc-950/70 px-2.5 py-1 text-xs font-mono text-zinc-300 group-hover:border-violet-500/30 transition-colors"
                >
                  {lang}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 4: Brand DNA & Voice Cloning (4-col card) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-4 group relative rounded-3xl border border-white/10 bg-zinc-900/50 p-7 backdrop-blur-xl overflow-hidden hover:border-cyan-500/50 hover:shadow-[0_0_35px_-10px_rgba(6,182,212,0.35)] transition-all duration-300"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 mb-6">
              <Fingerprint className="h-6 w-6 text-cyan-400" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-2.5">
              Custom Brand DNA Memory
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Upload your style guides, past newsletters, and product docs. Synthetix builds an isolated neural index that writes indistinguishably from you.
            </p>
            <div className="rounded-xl border border-white/10 bg-zinc-950/70 p-3 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Cpu className="h-4 w-4 text-cyan-400" />
                <span className="text-xs font-medium text-zinc-200">Acme_Brand_Voice_v3.bin</span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400">Active</span>
            </div>
          </motion.div>

          {/* Card 5: Enterprise Fact-Checking & Omni Export (4-col card) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.25 }}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-4 group relative rounded-3xl border border-white/10 bg-zinc-900/50 p-7 backdrop-blur-xl overflow-hidden hover:border-violet-500/50 hover:shadow-[0_0_35px_-10px_rgba(139,92,246,0.35)] transition-all duration-300"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#8B5CF6]/20 to-[#06B6D4]/20 border border-white/15 text-white mb-6">
              <ShieldCheck className="h-6 w-6 text-cyan-300" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-2.5">
              Verified Citations & 1-Click Sync
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Every claim is backed by live web grounding with inline citations. Push approved drafts directly to Notion, Webflow, WordPress, or HubSpot.
            </p>
            <div className="flex items-center justify-between rounded-xl border border-white/10 bg-zinc-950/70 px-3.5 py-2.5 text-xs">
              <span className="text-zinc-300 flex items-center gap-1.5">
                <Share2 className="h-3.5 w-3.5 text-violet-400" />
                Direct CMS Webhooks
              </span>
              <span className="font-mono text-cyan-300">Connected</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesBento;
