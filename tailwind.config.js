/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.vue',
    './layouts/**/*.vue',
    './pages/**/*.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        // Overwrite tailwind's default font (sans) with 'coolvetica'
        sans: 'coolvetica',
        // Other custom fonts:
        terminal: 'VT323'
      },
      boxShadow: {
        inside: 'inset 0 0 10px rgba(0,0,0,0.5)',
        top: '0px -10px 20px 0px rgba(0,0,0,0.2)'
      },
      backgroundColor: {
        'primary-dark': '#0D1117',
        'primary-light': '#F5F5F5',
        'secondary-dark': '#161B22',
        'secondary-light': '#E8EAF6'
      },
      colors: {
        dark: '#0D1117',
        light: '#F5F5F5',
        accent: '#7927b2',
        'accent-secondary': '#FB3182'
      },
      // Custom animations
      keyframes: {
        'blink-caret': {
          '0%, 100%': { 'border-color': 'transparent' },
          '50%': { 'border-right': '2px solid grey' }
        }
      },
      animation: {
        'blinking-caret': 'blink-caret 1s infinite'
      }
    }
  },
  plugins: []
}
