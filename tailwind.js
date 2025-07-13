/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // your source files
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a',   // Blue
        accent: '#f97316',    // Orange
        danger: '#ef4444',    // Red
        earth: '#8B5E3C',     // Brown
        dark: '#111827',      // Black
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
}
