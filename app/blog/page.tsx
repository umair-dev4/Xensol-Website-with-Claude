import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Insights on web design, development trends, conversion optimisation, and how subscription-based agencies are changing the game for growing businesses.',
  alternates: { canonical: 'https://xensoltech.com/blog' },
};

interface Post {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
  featured?: boolean;
  accent: string;
}

const posts: Post[] = [
  {
    title: 'Why Flat-Rate Web Design Is Changing How Businesses Scale',
    excerpt:
      'The per-project pricing model has a hidden cost most businesses never calculate: the decision fatigue and budget paralysis that kills momentum. Here\'s why subscriptions win.',
    category: 'Industry',
    date: 'May 14, 2026',
    readTime: '5 min read',
    slug: 'flat-rate-web-design-changing-business',
    featured: true,
    accent: 'from-accent/20 to-mint/10',
  },
  {
    title: '10 Landing Page Elements That Actually Convert in 2026',
    excerpt:
      'After analysing 300+ landing pages across our client base, these are the elements that consistently move the needle — and the ones you should stop wasting time on.',
    category: 'Conversion',
    date: 'May 7, 2026',
    readTime: '7 min read',
    slug: 'landing-page-elements-convert-2026',
    accent: 'from-mint/20 to-accent/10',
  },
  {
    title: 'The Real Hidden Cost of Freelance Web Design',
    excerpt:
      'Hourly rates look cheap until you factor in revision rounds, project management overhead, and the creeping scope. A breakdown no one wants to show you.',
    category: 'Business',
    date: 'Apr 29, 2026',
    readTime: '4 min read',
    slug: 'hidden-cost-freelance-web-design',
    accent: 'from-accent/15 to-surface',
  },
  {
    title: 'How We Deliver Premium Websites in 48 Hours',
    excerpt:
      'Our internal workflow — from how requests get triaged, to how design and development happen in parallel — and why most agencies could never replicate it.',
    category: 'Process',
    date: 'Apr 21, 2026',
    readTime: '6 min read',
    slug: 'how-we-deliver-websites-48-hours',
    accent: 'from-mint/15 to-surface',
  },
  {
    title: 'Design Trends Shaping 2026: What Actually Matters',
    excerpt:
      'Ignoring the noise. Here\'s what\'s genuinely changing user behavior and conversion rates — and what\'s just designers posting on Dribbble.',
    category: 'Design',
    date: 'Apr 14, 2026',
    readTime: '8 min read',
    slug: 'design-trends-2026-what-matters',
    accent: 'from-accent/20 to-mint/10',
  },
  {
    title: 'Building a Brand System That Scales: Our Framework',
    excerpt:
      'A practical guide to creating design tokens, component libraries, and brand guidelines that hold up as your product and team grow.',
    category: 'Branding',
    date: 'Apr 7, 2026',
    readTime: '5 min read',
    slug: 'brand-system-framework',
    accent: 'from-mint/20 to-accent/10',
  },
];

const categories = ['All', 'Industry', 'Design', 'Conversion', 'Process', 'Business', 'Branding'];

export default function BlogPage() {
  const featured = posts.find(p => p.featured);
  const rest = posts.filter(p => !p.featured);

  return (
    <>
      {/* ── HERO ─────────────────────────────────── */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden dot-grid">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-accent/[0.08] blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-up">
            <span className="section-chip mb-6 inline-flex">Xensol Journal</span>
          </div>
          <h1
            className="animate-fade-up anim-delay-1 font-display font-bold leading-[0.94] tracking-tight mb-8"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}
          >
            Insights on design,<br />
            <span className="gradient-text">growth & craft.</span>
          </h1>
          <p
            className="animate-fade-up anim-delay-2 text-muted max-w-xl mx-auto"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.175rem)', lineHeight: '1.75' }}
          >
            Practical articles from our team on web design, conversion optimisation,
            and building businesses that move fast.
          </p>
        </div>
      </section>

      {/* ── CATEGORY PILLS ───────────────────────── */}
      <section className="px-6 pb-8">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3 justify-center">
          {categories.map((cat, i) => (
            <button
              key={cat}
              className={`px-4 py-1.5 rounded-full text-sm font-mono transition-colors ${
                i === 0
                  ? 'bg-accent text-white'
                  : 'bg-surface border border-white/[0.08] text-muted hover:text-primary hover:border-accent/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── FEATURED POST ────────────────────────── */}
      {featured && (
        <section className="py-8 px-6">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <article className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${featured.accent} border border-white/[0.08] p-10 md:p-14 group cursor-pointer`}>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="section-chip text-[0.68rem]">{featured.category}</span>
                      <span className="text-muted text-xs font-mono">{featured.date}</span>
                      <span className="text-muted text-xs font-mono">{featured.readTime}</span>
                    </div>
                    <h2
                      className="font-display font-bold text-primary mb-4 group-hover:text-accent/90 transition-colors"
                      style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)' }}
                    >
                      {featured.title}
                    </h2>
                    <p className="text-muted leading-relaxed">{featured.excerpt}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-4 transition-all">
                      Read Article <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </div>
              </article>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* ── BLOG GRID ────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.07}>
                <article className="feature-card h-full flex flex-col group cursor-pointer">
                  {/* Colour bar */}
                  <div className={`h-1.5 rounded-full bg-gradient-to-r ${post.accent} mb-6`} />
                  <div className="flex items-center gap-3 mb-4">
                    <span className="section-chip text-[0.68rem]">{post.category}</span>
                  </div>
                  <h3
                    className="font-display font-bold text-primary mb-3 flex-1 group-hover:text-accent/90 transition-colors"
                    style={{ fontSize: '1.1rem', lineHeight: '1.35' }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-5">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/[0.06]">
                    <div className="flex items-center gap-3 text-xs text-muted font-mono">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <span className="text-accent text-xs group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ───────────────────────────── */}
      <section className="py-32 px-6">
        <div className="max-w-2xl mx-auto">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-3xl bg-surface border border-white/[0.08] p-10 md:p-14 text-center">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[300px] h-[300px] rounded-full bg-accent/8 blur-[80px]" />
              </div>
              <div className="relative z-10">
                <span className="section-chip mb-5 inline-flex">Newsletter</span>
                <h2 className="font-display font-bold text-primary mt-4 mb-3 text-2xl md:text-3xl">
                  Get insights in your inbox
                </h2>
                <p className="text-muted text-sm mb-8 max-w-sm mx-auto">
                  One email per week. No fluff. Just actionable insights on design, growth, and web strategy.
                </p>
                <div className="flex gap-3 max-w-sm mx-auto">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="flex-1 bg-bg border border-white/[0.08] rounded-full px-5 py-3 text-primary text-sm placeholder:text-muted focus:outline-none focus:border-accent/40 transition-colors"
                  />
                  <button className="btn-primary !py-3 !px-6 flex-shrink-0">
                    Subscribe
                  </button>
                </div>
                <p className="text-muted/50 text-xs mt-4">No spam. Unsubscribe any time.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
