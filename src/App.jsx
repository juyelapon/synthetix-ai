import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  ChevronDown,
  X,
  CheckCircle2,
  Play,
  Wand2,
  Cpu,
  Rocket,
  ArrowRight,
  Terminal,
} from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesBento from './components/FeaturesBento';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Ingest Your Brand DNA',
    description:
      'Connect your URL, Notion docs, or best-performing articles. Synthetix maps your syntax, pacing, and vocabulary into a private neural profile.',
    icon: Terminal,
  },
  {
    step: '02',
    title: 'Prompt or Pick a Growth Blueprint',
    description:
      'Choose from 80+ battle-tested frameworks—from viral X/LinkedIn threads to 3,000-word SEO pillar guides with real-time SERP entity injection.',
    icon: Wand2,
  },
  {
    step: '03',
    title: 'Refine & Publish in 1-Click',
    description:
      'Collaborate inline with instant tone shifts, live citation verification, and direct one-click deployment to Webflow, WordPress, or HubSpot.',
    icon: Rocket,
  },
];

const FAQ_ITEMS = [
  {
    question: 'How is Synthetix AI different from generic chat models?',
    answer:
      'Generic chat tools produce repetitive, recognizable AI prose. Synthetix AI combines multi-model routing with live SERP competitor analysis and your custom Brand DNA vector index—so every piece is factually grounded, SEO-optimized, and written in your authentic voice.',
  },
  {
    question: 'Will search engines penalize content written with Synthetix AI?',
    answer:
      'No. Search engines reward helpful, original, entity-rich content regardless of how it is drafted. Our built-in SEO engine structures semantic headings, injects verified citations, and ensures 100% originality so your pages climb SERPs rapidly.',
  },
  {
    question: 'Is my company data used to train public AI models?',
    answer:
      'Never. Your prompts, uploaded Brand DNA documents, and generated drafts are strictly isolated inside encrypted SOC2 Type II containers with zero data retention policies across all tiers.',
  },
  {
    question: 'Can I switch between Monthly and Yearly plans at any time?',
    answer:
      'Yes! You can upgrade, downgrade, or switch between monthly and annual billing with one click from your workspace settings. Unused credits roll over automatically when upgrading.',
  },
];

const App = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [modalState, setModalState] = useState({ open: false, type: null, meta: null });
  const [trialEmail, setTrialEmail] = useState('');
  const [trialSubmitted, setTrialSubmitted] = useState(false);

  const handleOpenTrialModal = (source = 'Free Trial') => {
    setTrialSubmitted(false);
    setModalState({ open: true, type: 'trial', meta: { source } });
  };

  const handleOpenDemoModal = () => {
    setModalState({ open: true, type: 'demo', meta: null });
  };

  const handleSelectPlan = (tierName, price, isYearly) => {
    setTrialSubmitted(false);
    setModalState({
      open: true,
      type: 'trial',
      meta: {
        source: `${tierName} Plan ($${price}/mo ${isYearly ? 'billed yearly' : 'billed monthly'})`,
      },
    });
  };

  const handleCloseModal = () => {
    setModalState({ open: false, type: null, meta: null });
  };

  const handleTrialSubmit = (e) => {
    e.preventDefault();
    if (!trialEmail.trim()) return;
    setTrialSubmitted(true);
    setTrialEmail('');
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 bg-grid-pattern relative selection:bg-violet-500/30 selection:text-cyan-200">
      {/* Sticky Glassmorphic Navbar */}
      <Navbar onOpenTrialModal={handleOpenTrialModal} />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenTrialModal={handleOpenTrialModal}
          onOpenDemoModal={handleOpenDemoModal}
        />

        {/* Social Proof Logo Strip */}
        <section className="py-10 border-y border-white/[0.06] bg-zinc-950/60 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-center text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 mb-6">
              Powering Content Velocity for 14,000+ High-Growth Teams
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center opacity-70">
              {[
                'VERCELIA',
                'CHRONOS.AI',
                'HYPERION',
                'LINEARITY',
                'RAYCASTLE',
                'QUANTUMFLOW',
              ].map((brand) => (
                <div
                  key={brand}
                  className="font-display text-sm sm:text-base font-extrabold tracking-widest text-zinc-400 hover:text-white transition-colors cursor-default"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Asymmetric Bento Grid Features */}
        <FeaturesBento />

        {/* 3-Step Neural Workflow Section */}
        <section id="workflow" className="py-24 border-y border-white/[0.06] bg-zinc-900/20 relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-violet-300 mb-4">
                <Cpu className="h-3.5 w-3.5" />
                <span>3-Step Neural Pipeline</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
                From Spark to Published in{' '}
                <span className="bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent">
                  Under 60 Seconds
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {WORKFLOW_STEPS.map((item, idx) => {
                const StepIcon = item.icon;
                return (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    className="relative rounded-3xl border border-white/10 bg-zinc-900/40 p-8 backdrop-blur-xl hover:border-cyan-400/40 transition-all"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#8B5CF6]/20 to-[#06B6D4]/20 border border-white/15 text-cyan-300">
                        <StepIcon className="h-6 w-6" />
                      </div>
                      <span className="font-mono text-3xl font-extrabold bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent opacity-80">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <Pricing onSelectPlan={handleSelectPlan} />

        {/* FAQ Accordion Section */}
        <section id="faqs" className="py-24 relative">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-zinc-400 text-base">
                Everything you need to know about the Synthetix AI Neural Engine.
              </p>
            </motion.div>

            <div className="space-y-4">
              {FAQ_ITEMS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <motion.div
                    key={faq.question}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className={`rounded-2xl border transition-all duration-300 ${
                      isOpen
                        ? 'border-violet-500/50 bg-zinc-900/70 shadow-[0_0_30px_-10px_rgba(139,92,246,0.3)]'
                        : 'border-white/10 bg-zinc-900/30 hover:border-white/20'
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                      className="flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none"
                    >
                      <span className="font-display text-base sm:text-lg font-semibold text-white pr-4">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-cyan-400 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-6 text-sm sm:text-base text-zinc-400 leading-relaxed border-t border-white/5 pt-4">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Final High-Converting Callout Banner */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-6xl relative rounded-3xl border border-white/15 bg-gradient-to-r from-violet-950/70 via-zinc-900/90 to-cyan-950/70 p-10 sm:p-16 text-center overflow-hidden shadow-[0_0_60px_-15px_rgba(139,92,246,0.4)]"
          >
            <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-[#8B5CF6]/30 to-[#06B6D4]/30 rounded-full blur-3xl" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-5">
                Ready to Write at{' '}
                <span className="bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent">
                  10x Neural Speed?
                </span>
              </h2>
              <p className="text-zinc-300 text-base sm:text-lg mb-8">
                Join 14,000+ founders, copywriters, and growth teams scaling their organic authority with Synthetix AI.
              </p>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleOpenTrialModal('Bottom Banner CTA')}
                className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] px-8 py-4 text-base font-bold text-white shadow-[0_0_35px_rgba(139,92,246,0.5)] hover:shadow-[0_0_50px_rgba(6,182,212,0.7)] transition-all"
              >
                <Sparkles className="h-5 w-5" />
                <span>Claim Your 10,000 Free Words</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Interactive Modals wrapped in Framer Motion AnimatePresence */}
      <AnimatePresence>
        {modalState.open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ type: 'spring', duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg rounded-3xl border border-white/15 bg-zinc-900/95 p-7 sm:p-9 shadow-[0_0_60px_rgba(139,92,246,0.4)]"
            >
              <button
                onClick={handleCloseModal}
                aria-label="Close modal"
                className="absolute right-5 top-5 rounded-xl border border-white/10 bg-white/5 p-2 text-zinc-400 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>

              {modalState.type === 'trial' ? (
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-mono text-cyan-300 mb-4">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>{modalState.meta?.source || 'Instant Workspace Provisioning'}</span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white mb-2">
                    Launch Your Synthetix AI Studio
                  </h3>
                  <p className="text-sm text-zinc-400 mb-6">
                    Enter your work email to unlock 10,000 neural words and Brand DNA cloning immediately.
                  </p>

                  {trialSubmitted ? (
                    <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5 text-center space-y-3">
                      <CheckCircle2 className="h-10 w-10 text-emerald-400 mx-auto" />
                      <div className="font-display text-lg font-bold text-white">
                        Magic Link Dispatched!
                      </div>
                      <p className="text-xs text-zinc-300">
                        Check your inbox to activate your Synthetix 4.2 Neural Studio.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleTrialSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                          Work Email
                        </label>
                        <input
                          type="email"
                          required
                          value={trialEmail}
                          onChange={(e) => setTrialEmail(e.target.value)}
                          placeholder="founder@company.com"
                          className="w-full rounded-xl border border-white/15 bg-zinc-950 px-4 py-3.5 text-sm text-white placeholder-zinc-500 focus:border-cyan-400 focus:outline-none"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] py-3.5 text-sm font-bold text-white shadow-[0_0_25px_rgba(139,92,246,0.45)]"
                      >
                        <span>Create Free Workspace</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </form>
                  )}
                </div>
              ) : (
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-mono text-violet-300 mb-4">
                    <Play className="h-3.5 w-3.5 fill-violet-300" />
                    <span>Interactive Product Tour (2:14)</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2">
                    Synthetix 4.2 Neural Engine in Action
                  </h3>
                  <p className="text-sm text-zinc-400 mb-5">
                    Watch how growth teams generate a 2,500-word SEO pillar post + 12 social hooks in 38 seconds.
                  </p>
                  <div className="relative rounded-2xl border border-white/15 bg-zinc-950 p-6 overflow-hidden">
                    <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-4">
                      <span>LIVE TELEMETRY STREAM</span>
                      <span className="text-cyan-400">1080p 60FPS</span>
                    </div>
                    <div className="space-y-3 font-mono text-xs">
                      <div className="rounded-lg bg-zinc-900 p-3 text-violet-300">
                        &gt; Analyzing top 10 SERP results for &quot;Enterprise AI Agents&quot;...
                      </div>
                      <div className="rounded-lg bg-zinc-900 p-3 text-cyan-300">
                        &gt; Injecting 28 latent semantic entities &amp; Brand Voice v3...
                      </div>
                      <div className="rounded-lg bg-emerald-950/50 border border-emerald-500/30 p-3 text-emerald-300">
                        ✓ Generated 2,480 words in 3.2s (SEO Score: 99/100)
                      </div>
                    </div>
                    <button
                      onClick={() => handleOpenTrialModal('Demo Modal CTA')}
                      className="mt-6 w-full rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] py-3 text-sm font-bold text-white"
                    >
                      Try It Live in Your Browser →
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
