/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0F',
        surface: '#13131A',
        'surface-2': '#1C1C27',
        accent: {
          DEFAULT: '#6C63FF',
          hover: '#8B84FF',
          muted: 'rgba(108,99,255,0.12)',
        },
        mint: {
          DEFAULT: '#00D4AA',
          muted: 'rgba(0,212,170,0.12)',
        },
        primary: '#F5F5F0',
        muted: '#8A8A9A',
        border: 'rgba(255,255,255,0.08)',
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
