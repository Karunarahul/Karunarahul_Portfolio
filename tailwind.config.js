/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:        '#B0AEAB',
        surface:   '#D4D1CC',
        primary:   '#0A0A0A',
        secondary: '#494847',
        muted:     '#6B6967',
        border:    '#8A8783',
      },
      fontFamily: {
        display: ['Satoshi', 'Inter', 'system-ui', 'sans-serif'],
        body:    ['General Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono:    ['Geist Mono', 'monospace'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
