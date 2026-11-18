/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#FAF8F5',
          card: '#FFFFFF',
          muted: '#F2EFE9',
          subtle: '#E8E3D8',
          border: '#DDD7CA',
        },
        ink: {
          DEFAULT: '#0A0B0E',
          soft: '#25272C',
          muted: '#5F636E',
          faint: '#9BA0AB',
        },
        accent: {
          DEFAULT: '#CEF23A', // electric-lime
          hover: '#B8E020',
          electric: '#D9FF00',
          subtle: '#F3FCC7',
          dark: '#0A0B0E',
        },
        cobalt: {
          DEFAULT: '#0047FF', // award-winning cobalt accent
          hover: '#0038CC',
          light: '#336CFF',
          muted: '#1E293B',
          glow: 'rgba(0, 71, 255, 0.15)',
        },
        dark: {
          DEFAULT: '#0A0B0E',
          surface: '#12141A',
          card: '#161922',
          border: 'rgba(255, 255, 255, 0.08)',
          subtle: 'rgba(255, 255, 255, 0.04)',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Syne"', '"Inter"', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        content: '1240px',
        wide: '1440px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
        'marquee': 'marquee 28s linear infinite',
        'marquee-reverse': 'marquee-reverse 28s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
      },
    },
  },
  plugins: [],
};
