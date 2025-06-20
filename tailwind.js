/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
  './src/**/*.{js,ts,jsx,tsx}', // ✅ your actual folder
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
    },
  },
  plugins: [],
}