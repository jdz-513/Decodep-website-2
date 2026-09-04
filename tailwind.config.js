/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#07111F',
          dark: '#07111F',
          surface: '#0D1728',
          card: '#0D1728',
          panel: '#0D1728',
          blue: '#1677FF',
          'blue-hover': '#388BFF',
          gold: '#F5B72C',
          'gold-light': '#FCD34D',
          text: '#FFFFFF',
          'text-secondary': '#9AA8BA',
          'text-muted': '#64748B',
          border: 'rgba(255, 255, 255, 0.10)',
          'border-subtle': 'rgba(255, 255, 255, 0.06)',
          'border-blue': 'rgba(22, 119, 255, 0.35)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
        'card': '0 8px 24px -4px rgba(0, 0, 0, 0.3)',
        'blue-sm': '0 0 16px rgba(22, 119, 255, 0.25)',
        'gold-sm': '0 0 16px rgba(245, 183, 44, 0.25)',
      },
    },
  },
  plugins: [],
}
