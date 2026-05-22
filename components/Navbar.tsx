'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { href: '/',         label: 'Home' },
  { href: '/about',    label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/blog',     label: 'Blog' },
  { href: '/contact',  label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const pathname                    = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-bg/80 backdrop-blur-xl border-b border-white/[0.06]'
            : 'py-5'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center font-display font-bold text-white text-sm group-hover:bg-accent-hover transition-colors">
              X
            </div>
            <span className="font-display font-bold text-primary text-[1.05rem] tracking-tight">
              Xensol<span className="text-accent">.</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm transition-colors duration-200 ${
                  pathname === href ? 'text-primary' : 'text-muted hover:text-primary'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="hidden md:inline-flex btn-primary !py-2.5 !px-5 !text-sm"
          >
            Get Started
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="md:hidden flex flex-col gap-[5px] p-2"
            aria-label="Toggle navigation menu"
          >
            {[0, 1, 2].map(i => (
              <span
                key={i}
                className={`block h-[1.5px] w-5 bg-primary rounded transition-all duration-300 origin-center ${
                  menuOpen
                    ? i === 0 ? 'rotate-45 translate-y-[6.5px]'
                    : i === 1 ? 'opacity-0'
                    : '-rotate-45 -translate-y-[6.5px]'
                    : ''
                }`}
              />
            ))}
          </button>
        </nav>
      </header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-bg flex flex-col items-center justify-center md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            <nav className="flex flex-col items-center gap-9">
              {links.map(({ href, label }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={href}
                    className="font-display text-4xl font-bold text-primary hover:text-accent transition-colors"
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.06 + 0.06 }}
              >
                <Link href="/contact" className="btn-primary mt-2">
                  Get Started
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
