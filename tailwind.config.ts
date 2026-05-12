import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0A',
        'bg-card': '#111111',
        'bg-muted': '#1A1A1A',
        text: '#FFFFFF',
        'text-secondary': '#A0A0A0',
        'text-tertiary': '#6B6B6B',
        border: '#222222',
        'border-strong': '#2E2E2E',
        accent: '#00D9A0',
        'accent-dim': '#008f6a',
        success: '#22C55E',
        warning: '#EAB308',
        risk: '#F97316',
        danger: '#EF4444',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      borderRadius: {
        sm: '6px',
        md: '8px',
        lg: '12px',
      },
    },
  },
  plugins: [],
};

export default config;
