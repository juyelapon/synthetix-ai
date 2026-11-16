import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Sparkles, Zap, Building2, Rocket, ArrowRight } from 'lucide-react';

const PRICING_TIERS = [
  {
    name: 'Hobby',
    tagline: 'For solo creators & indie hackers validating ideas fast.',
    monthlyPrice: 19,
    yearlyPrice: 15,
    icon: Rocket,
    popular: false,
    cta: 'Start Free Trial',
    features: [
      '30,000 neural words / month',
      '25+ high-converting copy templates',
      'Auto-Generate Hooks engine',
      '1 Custom Brand Voice profile',
      'Standard SERP keyword suggestions',
      'Browser extension & Notion export',
    ],
  },
  {
    name: 'Pro',
    tagline: 'For high-velocity marketers, agencies & growth teams.',
    monthlyPrice: 49,
    yearlyPrice: 39,
    icon: Zap,
    popular: true,
    cta: 'Get Started with Pro',
    features: [
      'Unlimited neural words & generations',
      'Synthetix 4.2 Ultra-Context Engine',
      'Real-Time SEO Optimization & SERP Audit',
      '10 Custom Brand DNA Voice profiles',
      '45+ Multilingual native localization',
      '1-Click WordPress, Webflow & HubSpot sync',
      'Priority GPU queue (zero latency)',
    ],
  },
  {
    name: 'Enterprise',
    tagline: 'For global organizations requiring custom models & security.',
    monthlyPrice: 149,
    yearlyPrice: 119,
    icon: Building2,
    popular: false,
    cta: 'Contact Enterprise Sales',
    features: [
      'Everything in Pro + Unlimited seats',
      'Dedicated fine-tuned private LLM cluster',
      'Zero data retention & SOC2 Type II compliance',
      'Unlimited Brand DNA & Knowledge Bases',
      'Custom REST API & webhook pipelines',
      'Dedicated Solutions Architect & 99.99% SLA',
    ],
  },
];

const Pricing = ({ onSelectPlan }) => {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section id="pricing" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-[#8B5CF6]/15 via-[#06B6D4]/10 to-transparent rounded-full blur-[140px] -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-violet-300 mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Transparent Scale</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Predictable Pricing that{' '}
            <span className="bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent">
              Pays for Itself
            </span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Start with 10,000 free words. Upgrade or cancel anytime with a single click.
          </p>

          {/* Monthly / Yearly Toggle Switch */}
          <div className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-white/10 bg-zinc-900/80 p-2 backdrop-blur-xl">
            <button
              type="button"
              onClick={() => setIsYearly(false)}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
                !isYearly
                  ? 'bg-white/10 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Monthly Billing
            </button>

            <button
              type="button"
              role="switch"
              aria-checked={isYearly}
              aria-label="Toggle annual billing"
              onClick={() => setIsYearly(!isYearly)}
              className="relative inline-flex h-7 w-14 shrink-0 cursor-pointer rounded-full border border-white/15 bg-zinc-950 p-1 transition-colors duration-300 focus:outline-none"
            >
              <motion.span
                layout
                transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                className={`inline-block h-5 w-5 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] shadow-[0_0_12px_rgba(6,182,212,0.8)] ${
                  isYearly ? 'translate-x-7' : 'translate-x-0'
                }`}
              />
            </button>

            <button
              type="button"
              onClick={() => setIsYearly(true)}
              className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
                isYearly
                  ? 'bg-gradient-to-r from-[#8B5CF6]/20 to-[#06B6D4]/20 border border-cyan-400/30 text-white'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <span>Yearly Billing</span>
              <span className="rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
          {PRICING_TIERS.map((tier, index) => {
            const Icon = tier.icon;
            const displayPrice = isYearly ? tier.yearlyPrice : tier.monthlyPrice;

            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ y: -6 }}
                className={`relative flex flex-col justify-between rounded-3xl p-8 backdrop-blur-2xl transition-all duration-300 ${
                  tier.popular
                    ? 'bg-gradient-to-b from-zinc-900/95 via-zinc-900/90 to-violet-950/40 border-2 border-violet-500/80 shadow-[0_0_50px_-10px_rgba(139,92,246,0.45)] lg:-mt-4 lg:mb-4'
                    : 'bg-zinc-900/50 border border-white/10 hover:border-white/25'
                }`}
              >
                {/* Most Popular Glowing Badge */}
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_25px_rgba(139,92,246,0.7)]">
                      <Sparkles className="h-3.5 w-3.5 fill-white" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div>
                  {/* Tier Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-xl border ${
                          tier.popular
                            ? 'bg-gradient-to-br from-[#8B5CF6] to-[#06B6D4] border-transparent text-white shadow-[0_0_20px_rgba(139,92,246,0.5)]'
                            : 'bg-white/5 border-white/10 text-cyan-400'
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-display text-2xl font-bold text-white">{tier.name}</h3>
                    </div>
                  </div>

                  <p className="text-sm text-zinc-400 leading-relaxed mb-6 min-h-[40px]">
                    {tier.tagline}
                  </p>

                  {/* Price Display */}
                  <div className="mb-8 pb-8 border-b border-white/10">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-zinc-400 text-2xl font-semibold">$</span>
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={displayPrice}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="font-display text-5xl font-extrabold text-white tracking-tight"
                        >
                          {displayPrice}
                        </motion.span>
                      </AnimatePresence>
                      <span className="text-sm text-zinc-400 font-medium">/ month</span>
                    </div>
                    <p className="mt-2 text-xs font-mono text-zinc-500">
                      {isYearly
                        ? `Billed annually ($${displayPrice * 12}/yr)`
                        : 'Billed monthly • Switch to annual anytime'}
                    </p>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3.5 mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-zinc-300">
                        <span
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                            tier.popular
                              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                              : 'bg-white/10 text-zinc-300'
                          }`}
                        >
                          <Check className="h-3 w-3" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onSelectPlan && onSelectPlan(tier.name, displayPrice, isYearly)}
                  className={`w-full flex items-center justify-center gap-2 rounded-2xl py-4 px-6 text-sm font-bold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] text-white shadow-[0_0_30px_rgba(139,92,246,0.45)] hover:shadow-[0_0_40px_rgba(6,182,212,0.65)]'
                      : 'bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/10 hover:border-cyan-400/40'
                  }`}
                >
                  <span>{tier.cta}</span>
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
