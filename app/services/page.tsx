import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore Xensol\'s full range of web design and development services — landing pages, web apps, e-commerce, UI systems, CMS platforms, and ongoing maintenance. All on one flat-rate subscription.',
  alternates: { canonical: 'https://xensoltech.com/services' },
};

const services = [
  {
    icon: '🎯',
    title: 'Landing Pages & Sales Funnels',
    desc: 'High-converting pages built to turn visitors into leads and customers. Every element is purposefully placed and tested.',
    tags: ['Next.js', 'React', 'Webflow'],
  },
  {
    icon: '⚙️',
    title: 'Web Application Design',
    desc: 'Beautiful, intuitive UI for SaaS products and complex web applications. We make complicated things feel simple.',
    tags: ['Figma', 'React', 'TypeScript'],
  },
  {
    icon: '🛒',
    title: 'E-commerce Development',
    desc: 'Full-featured online stores built to drive revenue. From product pages to checkout flows — optimised for conversion.',
    tags: ['Shopify', 'Next.js', 'Stripe'],
  },
  {
    icon: '✦',
    title: 'Brand Identity & UI Systems',
    desc: 'Cohesive design languages, component libraries, and brand guidelines that scale with your company.',
    tags: ['Figma', 'Design Tokens', 'Storybook'],
  },
  {
    icon: '📝',
    title: 'CMS & Blog Platforms',
    desc: 'Content-managed websites that your team can update without touching code. Built on the tools you already know.',
    tags: ['WordPress', 'Sanity', 'Contentful'],
  },
  {
    icon: '🔧',
    title: 'Maintenance & Growth',
    desc: 'Ongoing support, performance optimisation, A/B testing, and iterative improvements to keep your site ahead.',
    tags: ['Analytics', 'A/B Testing', 'SEO'],
  },
];

const process = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'We learn your goals, audience, competitive landscape, and constraints. No assumptions — just clarity.',
  },
  {
    num: '02',
    title: 'Design',
    desc: 'Pixel-perfect mockups in Figma with full component libraries. You see exactly what gets built before we touch code.',
  },
  {
    num: '03',
    title: 'Development',
    desc: 'Production-ready code, hand-crafted and optimised. Fast, accessible, and built to last.',
  },
  {
    num: '04',
    title: 'Review',
    desc: 'Unlimited rounds of refinement until every detail is exactly right. We iterate; you approve.',
  },
  {
    num: '05',
    title: 'Launch',
    desc: 'We handle deployment, domain setup, and final QA. Your site goes live without you lifting a finger.',
  },
];

const techStack = [
  { name: 'Next.js', type: 'Framework' },
  { name: 'React', type: 'UI Library' },
  { name: 'TypeScript', type: 'Language' },
  { name: 'Tailwind CSS', type: 'Styling' },
  { name: 'Figma', type: 'Design' },
  { name: 'Framer', type: 'Prototyping' },
  { name: 'Webflow', type: 'No-Code' },
  { name: 'WordPress', type: 'CMS' },
  { name: 'Shopify', type: 'E-commerce' },
  { name: 'Sanity', type: 'Headless CMS' },
  { name: 'Stripe', type: 'Payments' },
  { name: 'Vercel', type: 'Deployment' },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────── */}
      <section className="relative pt-40 pb-24 overflow-hidden dot-grid">
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full bg-mint/[0.07] blur-[130px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="animate-fade-up">
            <span className="section-chip mb-6 inline-flex">What We Build</span>
          </div>
          <h1
            className="animate-fade-up anim-delay-1 font-display font-bold leading-[0.94] tracking-tight mb-8"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}
          >
            Everything you need<br />
            to grow{' '}
            <span className="gradient-text">online.</span>
          </h1>
          <p
            className="animate-fade-up anim-delay-2 text-muted max-w-2xl"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.175rem)', lineHeight: '1.75' }}
          >
            From lightning-fast landing pages to complex web applications — all delivered
            on a single, predictable monthly subscription. No scope creep. No surprise invoices.
          </p>
        </div>
      </section>

      {/* ── SERVICES GRID ────────────────────────── */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="section-chip">Services</span>
            <h2
              className="font-display font-bold mt-5 mb-4"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              One subscription. Everything covered.
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.08}>
                <div className="feature-card h-full flex flex-col">
                  <div className="text-3xl mb-5">{s.icon}</div>
                  <h3 className="font-display font-bold text-xl text-primary mb-3">{s.title}</h3>
                  <p className="text-muted text-sm leading-relaxed flex-1 mb-5">{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 rounded-full bg-surface-2 border border-white/[0.06] text-muted text-xs font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────── */}
      <section className="py-32 bg-surface/40">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="section-chip">Our Process</span>
            <h2
              className="font-display font-bold mt-5"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              How every project gets done
            </h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto space-y-4">
            {process.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.08}>
                <div className="feature-card flex items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <span className="font-mono font-bold text-accent text-sm">{step.num}</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-primary mb-2">{step.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ───────────────────────────── */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="section-chip">Tech Stack</span>
            <h2
              className="font-display font-bold mt-5 mb-4"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              Built with the best tools
            </h2>
            <p className="text-muted text-lg max-w-md mx-auto">
              We use modern, proven technologies that deliver performance, scale, and longevity.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {techStack.map((tech, i) => (
              <AnimatedSection key={tech.name} delay={i * 0.04}>
                <div className="feature-card text-center py-6">
                  <p className="font-display font-bold text-primary mb-1">{tech.name}</p>
                  <p className="text-muted text-xs font-mono">{tech.type}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING CTA ──────────────────────────── */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-3xl bg-surface border border-accent/20 p-12 md:p-20 text-center card-glow-accent">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[400px] h-[400px] rounded-full bg-accent/8 blur-[90px]" />
              </div>
              <div className="relative z-10">
                <h2
                  className="font-display font-bold text-primary mb-5"
                  style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
                >
                  All of this, on one<br />
                  <span className="gradient-text-accent">simple subscription.</span>
                </h2>
                <p className="text-muted text-lg max-w-md mx-auto mb-10">
                  From $2,499/month. No long-term contracts. Pause or cancel anytime.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/contact" className="btn-primary">
                    Start Building <span aria-hidden="true">→</span>
                  </Link>
                  <Link href="/#pricing" className="btn-ghost">
                    Compare Plans
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
