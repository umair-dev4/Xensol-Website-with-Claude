import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import MarqueeRow from '@/components/MarqueeRow';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Xensoltech — Flat-Rate Website Design Subscription',
  description:
    'Grow your business effortlessly with Xensoltech. Unlimited web design & development requests, 48-hour turnaround, unlimited revisions, no hiring hassles.',
  alternates: { canonical: 'https://xensoltech.com' },
};

const valueProps = [
  {
    icon: '⚡',
    title: '48-Hour Delivery',
    desc: 'Most requests land in your inbox in under two business days — not two weeks. Speed is built into everything we do.',
  },
  {
    icon: '∞',
    title: 'Truly Unlimited',
    desc: 'Submit as many design & dev requests as your business needs. We work through them one by one, non-stop.',
  },
  {
    icon: '◈',
    title: 'One Flat Rate',
    desc: 'No hidden project quotes, no hourly surprises. One monthly subscription covers everything you need.',
  },
];

const steps = [
  {
    num: '01',
    title: 'Subscribe & Brief',
    desc: 'Choose your plan, get access to your project board, and drop your first request in minutes.',
  },
  {
    num: '02',
    title: 'Design & Develop',
    desc: 'Our team picks it up immediately — designing, coding, and shipping quality work fast.',
  },
  {
    num: '03',
    title: 'Review & Launch',
    desc: 'Request revisions freely until perfect, then hit publish with confidence.',
  },
];

const starterFeatures = [
  '2 active design requests',
  '48-hour delivery',
  'Unlimited revisions',
  'Dedicated Slack channel',
  'Web design & development',
  'Monthly progress report',
  'Pause or cancel anytime',
];

const proFeatures = [
  'Unlimited active requests',
  '24-hour priority delivery',
  'Unlimited revisions',
  'Dedicated project manager',
  'Full-stack development',
  'Monthly strategy call',
  'Custom integrations',
  'Pause or cancel anytime',
];

const testimonials = [
  {
    quote:
      'Xensol completely transformed how we approach our web presence. What used to take months now happens in days. Genuinely game-changing for our team.',
    name: 'Sarah Chen',
    role: 'Founder',
    company: 'TechVault',
    initials: 'SC',
    color: 'from-accent to-mint',
  },
  {
    quote:
      "The flat-rate model is brilliant. We went from dreading every web update to actually enjoying the creative process. The team's output quality is exceptional.",
    name: 'Marcus Rodriguez',
    role: 'CMO',
    company: 'Elevate Studios',
    initials: 'MR',
    color: 'from-mint to-accent',
  },
  {
    quote:
      "Skeptical at first. Three months in, we've gotten more value than an entire year with our previous agency — at half the cost.",
    name: 'Emma Williams',
    role: 'Product Lead',
    company: 'Nexus Health',
    initials: 'EW',
    color: 'from-accent-hover to-mint',
  },
];

const faqs = [
  {
    q: 'How does the subscription work?',
    a: "Subscribe to a plan, get access to your private project board, and start submitting requests immediately. We work through your queue one task at a time, delivering most requests within 48 hours.",
  },
  {
    q: 'What types of work do you handle?',
    a: 'We cover web design (Figma mockups, UI systems), front-end and full-stack development (Next.js, React, Webflow, WordPress, Shopify), landing pages, e-commerce, CMS platforms, and ongoing maintenance.',
  },
  {
    q: 'How do I submit a request?',
    a: "After subscribing you'll be invited to a shared Notion board. Simply write your request in plain language, attach any references or assets, and we'll handle the rest.",
  },
  {
    q: 'Can I really pause or cancel anytime?',
    a: "Absolutely. If you have a slow month, pause your subscription and resume when ready — your billing cycle adjusts automatically. You can cancel at any time, no questions asked.",
  },
  {
    q: "What's the revision policy?",
    a: "Unlimited revisions, always. We iterate until you are 100% satisfied. There are no revision caps, no extra charges for changes, and no passive-aggressive designers.",
  },
  {
    q: 'Do you offer custom enterprise plans?',
    a: "Yes. If your needs exceed the Pro plan — multiple teams, white-label work, dedicated team members, or SLA guarantees — reach out and we'll put together a custom arrangement.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden dot-grid">
        <div className="absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full bg-accent/[0.14] blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-mint/[0.1] blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-28 pb-20">
          <div className="animate-fade-up inline-flex items-center gap-2 section-chip mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse-dot" />
            Now accepting clients &middot; 2 spots remaining
          </div>

          <h1
            className="animate-fade-up anim-delay-1 font-display font-bold leading-[0.92] tracking-tight mb-7"
            style={{ fontSize: 'clamp(3rem, 9vw, 7.5rem)' }}
          >
            Boundless<br />
            <span className="gradient-text">Website Design.</span><br />
            Flat&#8209;Rate.
          </h1>

          <p
            className="animate-fade-up anim-delay-2 text-muted max-w-xl mx-auto mb-10"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.175rem)', lineHeight: '1.7' }}
          >
            Stop paying per-project fees. Get unlimited web design &amp; development
            on one simple monthly subscription — pause or cancel anytime.
          </p>

          <div className="animate-fade-up anim-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Start Building <span aria-hidden="true">→</span>
            </Link>
            <Link href="/services" className="btn-ghost">
              View Services
            </Link>
          </div>

          <div className="animate-fade-in anim-delay-5 mt-20 flex flex-col items-center gap-2 text-muted/50 text-xs font-mono tracking-widest">
            <span>SCROLL</span>
            <span className="animate-bounce">↓</span>
          </div>
        </div>
      </section>

      {/* ── TRUSTED BY ───────────────────────────── */}
      <section className="py-14 border-y border-white/[0.05]">
        <p className="text-center text-muted text-xs font-mono tracking-widest uppercase mb-8">
          Trusted by 200+ growing businesses worldwide
        </p>
        <MarqueeRow />
      </section>

      {/* ── VALUE PROPS ──────────────────────────── */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="section-chip">Why Xensol</span>
            <h2
              className="font-display font-bold mt-5 mb-4"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              Design without limits.<br />Billing without surprises.
            </h2>
            <p className="text-muted max-w-lg mx-auto text-lg">
              We built the agency model we always wished existed.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {valueProps.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="feature-card h-full">
                  <div className="text-3xl mb-5">{v.icon}</div>
                  <h3 className="font-display font-bold text-xl text-primary mb-3">
                    {v.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────── */}
      <section className="py-32 px-6 bg-surface/40">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <span className="section-chip">Process</span>
            <h2
              className="font-display font-bold mt-5"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              From zero to live in three steps
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-10 relative">
            <div className="hidden md:block absolute top-10 left-[calc(33%+16px)] right-[calc(33%+16px)] h-px bg-gradient-to-r from-accent/30 via-mint/30 to-accent/30" />
            {steps.map((s, i) => (
              <AnimatedSection key={s.num} delay={i * 0.14} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 relative z-10">
                    <span className="font-mono font-bold text-accent text-xl">{s.num}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-primary mb-3">{s.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────── */}
      <section className="py-32 px-6" id="pricing">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="section-chip">Pricing</span>
            <h2
              className="font-display font-bold mt-5 mb-4"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              Simple, predictable pricing
            </h2>
            <p className="text-muted text-lg max-w-md mx-auto">
              No quotes, no retainers. Pick your plan and start building today.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Starter */}
            <AnimatedSection delay={0.05}>
              <div className="feature-card h-full flex flex-col">
                <div className="mb-6">
                  <h3 className="font-display font-bold text-xl text-primary mb-1">Starter</h3>
                  <p className="text-muted text-sm">Perfect for growing startups</p>
                </div>
                <div className="mb-8">
                  <span className="font-mono font-bold text-primary text-5xl">$2,499</span>
                  <span className="text-muted text-sm ml-1">/month</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {starterFeatures.map(f => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <span className="text-accent mt-0.5 flex-shrink-0">✓</span>
                      <span className="text-muted">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-ghost justify-center">Get Started</Link>
              </div>
            </AnimatedSection>

            {/* Pro */}
            <AnimatedSection delay={0.12}>
              <div className="relative bg-surface-2 border border-accent/30 rounded-2xl p-8 card-glow-accent h-full flex flex-col">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center px-4 py-1 rounded-full bg-accent text-white font-mono text-xs tracking-wide">
                    ★ Most Popular
                  </span>
                </div>
                <div className="mb-6">
                  <h3 className="font-display font-bold text-xl text-primary mb-1">Pro</h3>
                  <p className="text-muted text-sm">For ambitious, fast-moving teams</p>
                </div>
                <div className="mb-8">
                  <span className="font-mono font-bold text-primary text-5xl">$4,499</span>
                  <span className="text-muted text-sm ml-1">/month</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {proFeatures.map(f => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <span className="text-mint mt-0.5 flex-shrink-0">✓</span>
                      <span className="text-muted">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-primary justify-center">Start Today</Link>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="mt-8 text-center">
            <p className="text-muted text-sm">
              Need something custom?{' '}
              <Link href="/contact" className="text-accent hover:text-accent-hover underline underline-offset-4 transition-colors">
                Let&apos;s talk enterprise
              </Link>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────── */}
      <section className="py-32 px-6 bg-surface/40">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="section-chip">Social Proof</span>
            <h2
              className="font-display font-bold mt-5"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              Clients who grew with us
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.1}>
                <div className="feature-card h-full flex flex-col">
                  <div className="flex gap-0.5 mb-5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <svg key={s} width="14" height="14" viewBox="0 0 14 14" fill="#6C63FF">
                        <path d="M7 0l1.75 5.25H14L9.625 8.75 11.375 14 7 10.5 2.625 14l1.75-5.25L0 5.25h5.25z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-primary/85 text-sm leading-relaxed italic flex-1 mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center font-bold text-white text-xs font-mono`}>
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-primary font-semibold text-sm">{t.name}</p>
                      <p className="text-muted text-xs">{t.role}, {t.company}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────── */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <span className="section-chip">FAQ</span>
            <h2
              className="font-display font-bold mt-5"
              style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
            >
              Questions? We&apos;ve got answers.
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <FAQAccordion items={faqs} />
          </AnimatedSection>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────── */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-3xl bg-surface border border-accent/20 p-12 md:p-20 text-center card-glow-accent">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[500px] h-[500px] rounded-full bg-accent/10 blur-[100px]" />
              </div>
              <div className="relative z-10">
                <span className="section-chip mb-6 inline-flex">Ready to scale?</span>
                <h2
                  className="font-display font-bold mt-4 mb-5 text-primary"
                  style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
                >
                  Your first delivery in{' '}
                  <span className="gradient-text-accent">48 hours.</span>
                </h2>
                <p className="text-muted text-lg max-w-md mx-auto mb-10">
                  Join 200+ businesses who stopped waiting weeks for websites
                  and started shipping in days.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/contact" className="btn-primary">
                    Start Your Project <span aria-hidden="true">→</span>
                  </Link>
                  <Link href="/services" className="btn-ghost">
                    Explore Services
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
