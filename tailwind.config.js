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
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'float-medium': 'floatMedium 6s ease-in-out infinite',
        'float-fast': 'floatFast 4s ease-in-out infinite',
        'blob': 'blob 12s ease-in-out infinite',
        'blob-slow': 'blob 18s ease-in-out infinite',
        'gradient-x': 'gradientX 6s ease infinite',
        'shimmer': 'shimmer 2.4s linear infinite',
        'pulse-slow': 'pulse 3.5s ease-in-out infinite',
        'scan': 'scan 3.2s ease-in-out infinite',
        'tilt': 'tilt 10s infinite linear',
        'spin-slow': 'spin 14s linear infinite',
        'marquee': 'marquee 30s linear infinite',
        'bounce-soft': 'bounceSoft 2.4s ease-in-out infinite',
        'grow-x': 'growX 1.2s cubic-bezier(0.16,1,0.3,1) forwards',
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
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-22px) translateX(8px)' },
        },
        floatMedium: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        floatFast: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(30px,-20px) scale(1.1)' },
          '66%': { transform: 'translate(-20px,25px) scale(0.95)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        scan: {
          '0%, 100%': { transform: 'translateY(-100%)', opacity: '0' },
          '50%': { transform: 'translateY(100%)', opacity: '0.5' },
        },
        tilt: {
          '0%, 50%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(0.5deg)' },
          '75%': { transform: 'rotate(-0.5deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
        growX: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      backgroundImage: {
        'grid-secondary': "linear-gradient(to right, rgba(93,64,55,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(93,64,55,0.06) 1px, transparent 1px)",
        'radial-fade': 'radial-gradient(circle at center, rgba(117,146,40,0.12), transparent 70%)',
      },
      backgroundSize: {
        'grid-size': '38px 38px',
      },
      boxShadow: {
        'glow-primary': '0 0 0 1px rgba(117,146,40,0.2), 0 10px 40px -10px rgba(117,146,40,0.35)',
      },
    },
  },
  plugins: [],
}
