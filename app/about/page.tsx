import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn how Xensol Technologies is rethinking web design delivery — fast, flat-rate, and fully subscription-based. Meet the team behind 200+ happy clients.',
  alternates: { canonical: 'https://xensoltech.com/about' },
};

const values = [
  {
    icon: '⚡',
    title: 'Speed First',
    desc: "We believe great work doesn't need to take forever. Every process we've built is optimised for delivery without sacrificing craft.",
  },
  {
    icon: '✦',
    title: 'Relentless Quality',
    desc: "We're obsessed with the details others skip. Pixel-perfect layouts, clean code, and designs that make clients proud.",
  },
  {
    icon: '◎',
    title: 'Radical Transparency',
    desc: "No surprise invoices, no vague timelines, no agency double-speak. You always know exactly what we're doing and why.",
  },
  {
    icon: '∞',
    title: 'True Partnership',
    desc: "We grow when our clients grow. Your success isn't a metric we track — it's the reason we show up every day.",
  },
];

const team = [
  {
    name: 'Alex Foster',
    role: 'Founder & CEO',
    bio: 'Former agency director who spent a decade frustrated by the broken retainer model. Built Xensol to fix it.',
    initials: 'AF',
    color: 'from-accent to-mint',
  },
  {
    name: 'Jordan Kim',
    role: 'Head of Design',
    bio: 'Ex-Figma and Stripe design team. Passionate about interfaces that feel inevitable — like they could never have been any other way.',
    initials: 'JK',
    color: 'from-mint to-accent',
  },
  {
    name: 'Priya Patel',
    role: 'Lead Developer',
    bio: 'Full-stack engineer obsessed with performance. If a page loads slowly, she takes it personally.',
    initials: 'PP',
    color: 'from-accent/80 to-mint/80',
  },
  {
    name: 'Sam Rivera',
    role: 'Client Success',
    bio: 'The reason our NPS score is through the roof. Keeps clients informed, excited, and feeling like the priority they are.',
    initials: 'SR',
    color: 'from-mint to-accent/70',
  },
];

const stats = [
  { number: '200+', label: 'Happy clients' },
  { number: '1,000+', label: 'Pages shipped' },
  { number: '4.9', label: 'Avg. rating' },
  { number: '48hrs', label: 'Avg. delivery' },
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────── */}
      <section className="relative pt-40 pb-24 overflow-hidden dot-grid">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/[0.08] blur-[130px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="animate-fade-up">
            <span className="section-chip mb-6 inline-flex">Our Story</span>
          </div>
          <h1
            className="animate-fade-up anim-delay-1 font-display font-bold leading-[0.94] tracking-tight mb-8"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}
          >
            We&apos;re rethinking how<br />
            <span className="gradient-text">great websites</span><br />
            get built.
          </h1>
          <p
            className="animate-fade-up anim-delay-2 text-muted max-w-2xl"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.175rem)', lineHeight: '1.75' }}
          >
            Founded in 2021, Xensol was born from a simple frustration: excellent web design
            shouldn&apos;t require massive budgets, months of waiting, or the gamble of hiring
            freelancers. We built the subscription model we always wished existed.
          </p>
        </div>
      </section>

      {/* ── MISSION QUOTE ────────────────────────── */}
      <section className="py-24 bg-surface/40">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <blockquote className="relative pl-8 border-l-2 border-accent max-w-4xl">
              <p
                className="font-display font-bold text-primary leading-tight"
                style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}
              >
                &ldquo;Traditional agencies charge project fees that break budgets.
                Freelancers are unpredictable. In-house teams are expensive.
                Xensol is the fourth option — the one that actually makes sense.&rdquo;
              </p>
              <footer className="mt-6 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent to-mint flex items-center justify-center text-white font-mono text-xs font-bold">
                  AF
                </div>
                <div>
                  <p className="text-primary font-semibold text-sm">Alex Foster</p>
                  <p className="text-muted text-xs">Founder & CEO, Xensol Technologies</p>
                </div>
              </footer>
            </blockquote>
          </AnimatedSection>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 0.08}>
                <div className="text-center p-8 feature-card">
                  <p className="font-mono font-bold text-primary mb-2" style={{ fontSize: '2.5rem' }}>
                    {s.number}
                  </p>
                  <p className="text-muted text-sm">{s.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ───────────────────────────────── */}
      <section className="py-32 bg-surface/40">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="section-chip">Core Values</span>
            <h2
              className="font-display font-bold mt-5"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              What drives every pixel we make
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.08}>
                <div className="feature-card h-full">
                  <div className="text-2xl mb-4">{v.icon}</div>
                  <h3 className="font-display font-bold text-lg text-primary mb-3">{v.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ─────────────────────────────────── */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="section-chip">The Team</span>
            <h2
              className="font-display font-bold mt-5"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              Small team. Massive output.
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.1}>
                <div className="feature-card text-center h-full">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-mono font-bold text-lg mx-auto mb-5`}>
                    {member.initials}
                  </div>
                  <h3 className="font-display font-bold text-lg text-primary mb-1">{member.name}</h3>
                  <p className="text-accent text-xs font-mono mb-4 tracking-wide">{member.role}</p>
                  <p className="text-muted text-sm leading-relaxed">{member.bio}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="py-32 bg-surface/40">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <span className="section-chip mb-6 inline-flex">Work With Us</span>
              <h2
                className="font-display font-bold mt-4 mb-5"
                style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
              >
                Ready to meet your new web team?
              </h2>
              <p className="text-muted text-lg mb-10">
                We&apos;re currently accepting a limited number of new clients.
                Let&apos;s talk about what we can build together.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  Get in Touch <span aria-hidden="true">→</span>
                </Link>
                <Link href="/services" className="btn-ghost">
                  See Our Services
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
