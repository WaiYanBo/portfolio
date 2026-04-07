/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Olive Green Palette
        primary: {
          50: '#f4f7e6',
          100: '#e6ecc6',
          200: '#d0dd96',
          300: '#b4cb63',
          400: '#96b63b',
          500: '#759228', // Base Olive
          600: '#5c741e',
          700: '#485b1a',
          800: '#3c4a19',
          900: '#323f18',
        },
        // Cream & Brown Palette
        secondary: {
          50: '#fdfbf7', // Light Cream (Main Background)
          100: '#f8f5ea',
          200: '#efe8d3',
          300: '#e3d5b3',
          400: '#d1b889',
          500: '#bfa06a',
          600: '#a38153',
          700: '#846643', // Light Brown
          800: '#5d4037', // Deep Brown (Main Text)
          900: '#4e342e', // Darkest Brown
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}