'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  q: string;
  a: string;
}

interface Props {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: Props) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-black/[0.08]">
      {items.map(({ q, a }, i) => (
        <div key={i}>
          <button
            className="w-full flex items-center justify-between gap-4 py-5 text-left group"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className={`font-sans text-[0.9375rem] font-medium transition-colors ${open === i ? 'text-primary' : 'text-primary/80 group-hover:text-primary'}`}>
              {q}
            </span>
            <span
              className={`flex-shrink-0 w-7 h-7 rounded-full border border-black/[0.12] flex items-center justify-center text-muted transition-all duration-300 ${
                open === i ? 'bg-accent border-accent text-white rotate-45' : 'group-hover:border-accent/40'
              }`}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </span>
          </button>

          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <p className="text-muted text-sm leading-relaxed pb-5 max-w-2xl">
                  {a}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
