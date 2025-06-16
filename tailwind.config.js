/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'construction': {
          50: '#FEF9EE',
          100: '#FDF3D7',
          200: '#FCE3AA',
          300: '#FAD47D',
          400: '#F8C550',
          500: '#F59E0B', // Primary amber
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#713113',
        },
      },
      boxShadow: {
        'hero': '0 4px 12px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
};