/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'vs-navy': '#1a2b8c',
        'vs-navy-light': '#2a3faa',
        'vs-orange': '#e8621a',
        'vs-orange-light': '#ff7c35',
        'vs-bg': '#080d1a',
        'vs-bg-light': '#0d1530',
        'vs-surface': '#111827',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
