'use client';

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Status = 'idle' | 'sending' | 'sent';

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}

const services = [
  'Landing Page / Sales Funnel',
  'Web Application Design',
  'E-commerce Development',
  'Brand Identity & UI System',
  'CMS / Blog Platform',
  'Maintenance & Growth',
  'Not sure — let\'s talk',
];

const budgets = [
  'Under $1,000/mo',
  '$1,000 – $2,499/mo',
  '$2,500 – $4,499/mo',
  '$4,500+/mo',
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [data, setData] = useState<FormData>({
    name: '', email: '', company: '', service: '', budget: '', message: '',
  });

  const set = (k: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setData(d => ({ ...d, [k]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    await new Promise(r => setTimeout(r, 1800));
    setStatus('sent');
  };

  const inputCls =
    'w-full bg-surface border border-white/[0.08] rounded-xl px-4 py-3 text-primary text-sm placeholder:text-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors';

  return (
    <AnimatePresence mode="wait">
      {status === 'sent' ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center text-center py-16 px-8 bg-surface border border-white/[0.08] rounded-2xl"
        >
          <div className="w-16 h-16 rounded-full bg-mint/10 border border-mint/30 flex items-center justify-center mb-6">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M5 14l7 7L23 7" stroke="#00D4AA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="font-display font-bold text-2xl text-primary mb-3">
            Message received!
          </h3>
          <p className="text-muted text-sm max-w-xs">
            We'll review your project and get back to you within 24 hours.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-muted mb-1.5 ml-1">Full Name</label>
              <input
                required
                type="text"
                placeholder="Alex Foster"
                value={data.name}
                onChange={set('name')}
                className={inputCls}
              />
            </div>
            <div>
              <label className="block text-xs text-muted mb-1.5 ml-1">Work Email</label>
              <input
                required
                type="email"
                placeholder="alex@company.com"
                value={data.email}
                onChange={set('email')}
                className={inputCls}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs text-muted mb-1.5 ml-1">Company</label>
            <input
              type="text"
              placeholder="Your company name"
              value={data.company}
              onChange={set('company')}
              className={inputCls}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-muted mb-1.5 ml-1">Service Interest</label>
              <select
                value={data.service}
                onChange={set('service')}
                className={`${inputCls} appearance-none cursor-pointer`}
              >
                <option value="" disabled>Select a service…</option>
                {services.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs text-muted mb-1.5 ml-1">Monthly Budget</label>
              <select
                value={data.budget}
                onChange={set('budget')}
                className={`${inputCls} appearance-none cursor-pointer`}
              >
                <option value="" disabled>Select budget…</option>
                {budgets.map(b => <option key={b} value={b}>{b}</option>)}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs text-muted mb-1.5 ml-1">Project Details</label>
            <textarea
              required
              rows={5}
              placeholder="Tell us about your project, goals, and any timeline requirements…"
              value={data.message}
              onChange={set('message')}
              className={`${inputCls} resize-none`}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? (
              <>
                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="31.4" strokeDashoffset="10" strokeLinecap="round"/>
                </svg>
                Sending…
              </>
            ) : (
              <>Send Message <span aria-hidden>→</span></>
            )}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
