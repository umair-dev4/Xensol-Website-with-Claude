'use client';

const companies = [
  'TechVault', 'Elevate Studio', 'Nexus Health', 'Pulsar Labs',
  'Orbit Media', 'Skyline Co.', 'Vortex Digital', 'Axiom Group',
  'Stellar Works', 'Prism Agency', 'Helix Partners', 'Zenith SaaS',
];

export default function MarqueeRow() {
  const doubled = [...companies, ...companies];

  return (
    <div className="relative overflow-hidden py-1 select-none">
      {/* fade edges */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee marquee-track whitespace-nowrap gap-0">
        {doubled.map((name, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 px-8 text-muted font-sans text-sm tracking-wide"
          >
            <span className="text-accent/40 text-xs">◆</span>
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
