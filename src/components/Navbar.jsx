import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Menu, X, ArrowRight, Zap } from 'lucide-react';

const Navbar = ({ onOpenTrialModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Workflow', href: '#workflow' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQs', href: '#faqs' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`mx-auto max-w-7xl rounded-2xl transition-all duration-300 ${
          scrolled
            ? 'bg-zinc-950/80 backdrop-blur-xl border border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] py-3 px-5'
            : 'bg-zinc-900/40 backdrop-blur-md border border-white/[0.07] py-4 px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#06B6D4] p-[1px] shadow-[0_0_25px_rgba(139,92,246,0.5)] group-hover:shadow-[0_0_35px_rgba(6,182,212,0.65)] transition-shadow duration-300">
              <div className="flex h-full w-full items-center justify-center rounded-[11px] bg-zinc-950/90 backdrop-blur-sm">
                <Sparkles className="h-5 w-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <span className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] opacity-30 blur-md group-hover:opacity-60 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display text-lg font-bold tracking-tight text-white">
                  Synthetix
                </span>
                <span className="rounded-md bg-gradient-to-r from-[#8B5CF6]/20 to-[#06B6D4]/20 border border-cyan-400/30 px-1.5 py-0.5 text-[11px] font-semibold tracking-wider text-cyan-300 uppercase">
                  AI
                </span>
              </div>
              <span className="text-[10px] text-zinc-500 font-mono tracking-wider hidden sm:inline">
                v4.2 NEURAL ENGINE
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 rounded-full bg-white/[0.03] border border-white/[0.06] px-2 py-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-4 py-1.5 text-sm font-medium text-zinc-300 hover:text-white transition-colors rounded-full hover:bg-white/[0.06]"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right CTA Action */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => onOpenTrialModal && onOpenTrialModal('Sign In')}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Sign In
            </button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onOpenTrialModal && onOpenTrialModal('Free Trial')}
              className="relative group overflow-hidden rounded-xl p-[1px] focus:outline-none"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] via-[#06B6D4] to-[#8B5CF6] rounded-xl opacity-90 group-hover:opacity-100 transition-opacity" />
              <span className="absolute -inset-1 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] rounded-xl blur-md opacity-40 group-hover:opacity-75 transition duration-300" />
              <div className="relative flex items-center gap-2 rounded-[11px] bg-zinc-950/80 group-hover:bg-zinc-950/50 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md transition-colors">
                <Zap className="h-3.5 w-3.5 text-cyan-400 fill-cyan-400" />
                <span>Start Free Trial</span>
                <ArrowRight className="h-3.5 w-3.5 text-zinc-300 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </motion.button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2.5 text-zinc-300 hover:bg-white/10 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden md:hidden"
            >
              <div className="mt-4 space-y-2 border-t border-white/10 pt-4 pb-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-300 hover:bg-white/5 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-3 flex flex-col gap-2.5">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenTrialModal && onOpenTrialModal('Free Trial');
                    }}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] px-4 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(139,92,246,0.4)]"
                  >
                    <Zap className="h-4 w-4 fill-white" />
                    <span>Start Free Trial</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

export default Navbar;
