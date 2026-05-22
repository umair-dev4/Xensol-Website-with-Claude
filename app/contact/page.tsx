import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    "Start your project with Xensol Technologies. Tell us what you need — we'll respond within 24 hours and get your first design delivered in 48.",
  alternates: { canonical: 'https://xensoltech.com/contact' },
};

const contactDetails = [
  {
    icon: '✉',
    label: 'Email us',
    value: 'hello@xensoltech.com',
    sub: 'We reply within 24 hours',
  },
  {
    icon: '◎',
    label: 'Current availability',
    value: '2 client spots open',
    sub: 'Accepting new projects now',
  },
  {
    icon: '⏱',
    label: 'Response time',
    value: 'Under 24 hours',
    sub: 'Monday – Friday, 9am–6pm EST',
  },
  {
    icon: '📍',
    label: 'Based in',
    value: 'Global — Fully Remote',
    sub: 'Team across 3 time zones',
  },
];

const quickFaqs = [
  {
    q: 'How quickly can you start on my project?',
    a: "Once you subscribe, we can start the same business day. Your first design will typically be ready within 48 hours of your first request.",
  },
  {
    q: "What if I'm not happy with the work?",
    a: "We offer unlimited revisions — we iterate until you're completely satisfied. If after extensive rounds you're still unhappy, we'll discuss options including a refund for that billing period.",
  },
  {
    q: 'Do you offer a trial or sample project?',
    a: "We don't offer free trials, but you can cancel after your first month if it's not a fit — no questions asked. Most clients see their first delivery within the first week.",
  },
  {
    q: 'Can I see examples of past work?',
    a: "Absolutely. Reach out via the form and mention you'd like to see relevant portfolio pieces. We'll share work from clients in similar industries or with similar project types.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────── */}
      <section className="relative pt-40 pb-20 overflow-hidden dot-grid">
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full bg-mint/[0.07] blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="animate-fade-up">
            <span className="section-chip mb-6 inline-flex">Get in Touch</span>
          </div>
          <h1
            className="animate-fade-up anim-delay-1 font-display font-bold leading-[0.94] tracking-tight mb-6"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}
          >
            Let&apos;s build something<br />
            <span className="gradient-text">great together.</span>
          </h1>
          <p
            className="animate-fade-up anim-delay-2 text-muted max-w-xl"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.175rem)', lineHeight: '1.75' }}
          >
            Tell us about your project. We&apos;ll get back to you within 24 hours
            and have your first design ready within 48.
          </p>
        </div>
      </section>

      {/* ── FORM + CONTACT INFO ───────────────────── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <AnimatedSection>
              <div className="bg-surface border border-white/[0.08] rounded-2xl p-8">
                <h2 className="font-display font-bold text-2xl text-primary mb-2">
                  Start a conversation
                </h2>
                <p className="text-muted text-sm mb-8">
                  Fill in your details below and we&apos;ll put together a tailored proposal.
                </p>
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>

          {/* Contact details */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {contactDetails.map((d, i) => (
              <AnimatedSection key={d.label} delay={i * 0.08} direction="left">
                <div className="feature-card">
                  <div className="flex items-start gap-4">
                    <span className="text-xl mt-0.5">{d.icon}</span>
                    <div>
                      <p className="text-muted text-xs font-mono uppercase tracking-wider mb-1">
                        {d.label}
                      </p>
                      <p className="text-primary font-semibold text-sm mb-0.5">{d.value}</p>
                      <p className="text-muted text-xs">{d.sub}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}

            <AnimatedSection delay={0.35} direction="left">
              <div className="feature-card bg-gradient-to-br from-accent/10 to-mint/5 border-accent/20">
                <p className="text-primary font-display font-bold text-lg mb-2">
                  Prefer to talk first?
                </p>
                <p className="text-muted text-sm mb-5">
                  Book a free 20-minute discovery call — no sales pitch, just an honest conversation about your project.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-accent text-sm font-semibold hover:text-accent-hover transition-colors"
                >
                  Book a Call →
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── QUICK FAQ ────────────────────────────── */}
      <section className="py-32 bg-surface/40">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <span className="section-chip">Before You Write</span>
            <h2
              className="font-display font-bold mt-5"
              style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
            >
              Quick answers
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="max-w-3xl mx-auto">
              <FAQAccordion items={quickFaqs} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── AVAILABILITY BANNER ───────────────────── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-surface border border-accent/20 rounded-2xl p-8 card-glow-accent">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-mint animate-pulse-dot flex-shrink-0" />
                <div>
                  <p className="text-primary font-display font-bold text-lg">
                    Currently accepting new clients
                  </p>
                  <p className="text-muted text-sm">2 subscription spots available — first come, first served</p>
                </div>
              </div>
              <a href="#" className="btn-primary flex-shrink-0">
                Claim a Spot →
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
