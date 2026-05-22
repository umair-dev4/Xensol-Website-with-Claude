import Link from 'next/link';

const cols = {
  Company:  [
    { href: '/about',    label: 'About Us' },
    { href: '/blog',     label: 'Blog' },
    { href: '/contact',  label: 'Contact' },
  ],
  Services: [
    { href: '/services', label: 'Web Design' },
    { href: '/services', label: 'Development' },
    { href: '/services', label: 'UI/UX Systems' },
    { href: '/services', label: 'Maintenance' },
  ],
  Legal: [
    { href: '#', label: 'Privacy Policy' },
    { href: '#', label: 'Terms of Service' },
    { href: '#', label: 'Cookie Policy' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-surface">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-14">
          {/* Brand column */}
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center font-display font-bold text-white text-sm">
                X
              </div>
              <span className="font-display font-bold text-primary text-[1.05rem] tracking-tight">
                Xensol<span className="text-accent">.</span>
              </span>
            </Link>
            <p className="text-muted text-sm leading-relaxed max-w-[260px]">
              Boundless website design on a flat‑rate subscription. No hourly
              fees — just great work, fast.
            </p>
            <div className="flex gap-4 mt-6">
              {['Twitter', 'LinkedIn', 'Dribbble'].map(s => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="text-muted hover:text-primary transition-colors text-xs border border-border hover:border-white/20 rounded-full px-3 py-1"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(cols).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="text-primary font-semibold text-sm mb-4">{heading}</h4>
              <ul className="space-y-3">
                {items.map(({ href, label }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-muted text-sm hover:text-primary transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 border-t border-white/[0.06]">
          <p className="text-muted text-xs">
            © {new Date().getFullYear()} Xensol Technologies. All rights reserved.
          </p>
          <p className="text-muted text-xs">
            Crafted with precision · Delivered in 48hrs
          </p>
        </div>
      </div>
    </footer>
  );
}
