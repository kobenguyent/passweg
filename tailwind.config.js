/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        passport: {
          50: '#fdf3f4',
          100: '#fbe6e8',
          200: '#f8d0d5',
          300: '#f1abb4',
          400: '#e57a89',
          500: '#d54f63',
          600: '#bd334a',
          700: '#9e253a',
          800: '#7a1c2d', // German Reisepass burgundy
          900: '#5c1421',
          950: '#380710',
        },
        eagleGold: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#d4af37', // Federal gold
          600: '#b8860b',
          700: '#926a08',
          800: '#76520e',
          900: '#644413',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
