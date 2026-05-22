/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#FFFFFF',
        surface: '#F7F8FC',
        'surface-2': '#ECEEF6',
        accent: {
          DEFAULT: '#635BFF',
          hover: '#4F46E5',
          muted: 'rgba(99,91,255,0.10)',
        },
        mint: {
          DEFAULT: '#00875A',
          muted: 'rgba(0,135,90,0.10)',
        },
        primary: '#0A2540',
        muted: '#64748B',
        border: 'rgba(0,0,0,0.08)',
      },
      fontFamily: {
        display: ['var(--font-syne)', 'sans-serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) both',
        'fade-in': 'fadeIn 0.6s ease-out both',
        'marquee': 'marquee 28s linear infinite',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(32px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        pulseDot: {
          '0%,100%': { opacity: '1', transform: 'scale(1)' },
          '50%':     { opacity: '0.5', transform: 'scale(0.75)' },
        },
      },
    },
  },
  plugins: [],
};
