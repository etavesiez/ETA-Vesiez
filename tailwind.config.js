/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          brown: '#4E3629',
          gold: '#E1AD01',
          green: '#2E4A31',
          cream: '#F8F5E1',
        }
      },
      fontFamily: {
        sans: ['Avenir Next', 'Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        block: [
          'League Spartan',
          'Berthold Block',
          'Bebas Neue',
          'BBH Bogle',
          'Montserrat',
          'Archivo Black',
          'Oswald',
          'Anton',
          'Impact',
          'Arial Black',
          'sans-serif',
        ],
      }
    },
  },
  plugins: [],
}