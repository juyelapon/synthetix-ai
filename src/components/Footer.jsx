import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Twitter,
  Github,
  Linkedin,
  Youtube,
  Send,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
  };

  const footerColumns = [
    {
      title: 'Product',
      links: [
        { label: 'Neural Editor 4.2', href: '#features' },
        { label: 'Auto-Generate Hooks', href: '#features' },
        { label: 'Real-Time SERP SEO', href: '#features' },
        { label: 'Brand DNA Voices', href: '#features' },
        { label: 'Pricing Plans', href: '#pricing' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Prompt Engineering Guide', href: '#workflow' },
        { label: 'API Documentation', href: '#faqs' },
        { label: 'Customer Case Studies', href: '#workflow' },
        { label: 'System Status (99.99%)', href: '#faqs' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Synthetix Labs', href: '#' },
        { label: 'Security & SOC2', href: '#faqs' },
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
      ],
    },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-zinc-950 pt-20 pb-12 overflow-hidden">
      {/* Subtle Bottom Radial Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-gradient-to-r from-[#8B5CF6]/15 to-[#06B6D4]/15 blur-[120px] -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Left Brand & Newsletter Signup */}
          <div className="lg:col-span-5 space-y-6">
            <a href="#" className="flex items-center gap-3 group w-fit">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#06B6D4] p-[1px] shadow-[0_0_20px_rgba(139,92,246,0.4)]">
                <div className="flex h-full w-full items-center justify-center rounded-[11px] bg-zinc-950">
                  <Sparkles className="h-5 w-5 text-cyan-400" />
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-display text-xl font-bold tracking-tight text-white">
                  Synthetix
                </span>
                <span className="rounded-md bg-cyan-500/15 border border-cyan-400/30 px-1.5 py-0.5 text-[11px] font-semibold text-cyan-300 uppercase">
                  AI
                </span>
              </div>
            </a>

            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
              The next-generation neural writing and growth engine built for category-defining teams. Write 10x faster with zero compromise on brand voice.
            </p>

            {/* Newsletter Signup Box */}
            <div className="pt-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-3">
                Subscribe to Neural Dispatch (Weekly AI Growth Tactics)
              </p>
              {subscribed ? (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300 max-w-md"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                  <span>You&apos;re on the list! Check your inbox for our top 50 AI prompts.</span>
                </motion.div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5 max-w-md">
                  <div className="relative flex-1">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="enter@yourdomain.com"
                      aria-label="Email address for newsletter"
                      className="w-full rounded-xl border border-white/15 bg-zinc-900/80 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(139,92,246,0.35)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all"
                  >
                    <span>Subscribe</span>
                    <Send className="h-3.5 w-3.5" />
                  </motion.button>
                </form>
              )}
            </div>
          </div>

          {/* Right Navigation Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h4 className="font-display text-sm font-semibold text-white mb-4">
                  {col.title}
                </h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="group inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-cyan-300 transition-colors"
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Copyright & Sleek Social Icons */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs text-zinc-500">
            <span>© {new Date().getFullYear()} Synthetix AI Labs Inc. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-emerald-400 font-mono">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              All Neural Clusters Operational
            </span>
          </div>

          <div className="flex items-center gap-3">
            {[
              { icon: Twitter, label: 'Twitter / X', href: 'https://twitter.com' },
              { icon: Github, label: 'GitHub', href: 'https://github.com' },
              { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
              { icon: Youtube, label: 'YouTube', href: 'https://youtube.com' },
            ].map((social) => {
              const SocialIcon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-zinc-900/70 text-zinc-400 hover:border-cyan-400/40 hover:text-white hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all"
                >
                  <SocialIcon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
